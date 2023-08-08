import config from '../config';

AFRAME.registerComponent('throw-controls', {
  grabbed: null,
  force: 3,
  startPosition: null,
  startForceAccumulationTime: 0,
  keyIsDown: false,
  pointerStartPosition: null,

  init() {
    this.pointer = this.el;
    this.camera = document.getElementById('camera');
    this.forceRange = camera.querySelector('#forceRange');

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.grabStart = this.grabStart.bind(this);
    this.grabEnd = this.grabEnd.bind(this);
    this.applyImpulse = this.applyImpulse.bind(this);
    this.trackPadDownHandler = this.trackPadDownHandler.bind(this);
    this.trackPadUpHandler = this.trackPadUpHandler.bind(this);
    this.bodyLoadedHandler = this.bodyLoadedHandler.bind(this);

    this.el.sceneEl.addEventListener('grab-start', this.grabStart);
    this.el.sceneEl.addEventListener('grab-end', this.grabEnd);

    this.pointer.addEventListener('buttondown', this.trackPadDownHandler);
    this.pointer.addEventListener('buttonup', this.trackPadUpHandler);

    document.body.addEventListener('keydown', this.keyDownHandler);
    document.body.addEventListener('keyup', this.keyUpHandler);

    this.pointer.addEventListener('body-loaded', this.bodyLoadedHandler);
  },

  remove() {
    this.el.sceneEl.removeEventListener('grab-start', this.grabStart);
    this.el.sceneEl.removeEventListener('grab-end', this.grabEnd);

    this.pointer.removeEventListener('trackpaddown', this.trackPadDownHandler);
    this.pointer.removeEventListener('trackpadup', this.trackPadUpHandler);

    document.body.removeEventListener('keydown', this.keyDownHandler);
    document.body.removeEventListener('keyup', this.keyUpHandler);

    this.pointer.removeEventListener('body-loaded', this.bodyLoadedHandler);
  },

  grabStart(e) {
    if (e.detail) {
      this.grabbed = e.detail.target;
    }
  },

  grabEnd(e) {
    this.grabbed = null;
  },

  bodyLoadedHandler(e) {
    this.pointerStartPosition = Object.assign(
      {},
      this.pointer.object3D.position,
    );
  },

  getZeroPosition() {
    if (this.pointer.id === 'cursor') {
      return this.camera.object3D.position;
    }
    return this.pointer.object3D.position;
  },

  keyDownHandler(e) {
    if (e.keyCode === 32 && !this.keyIsDown) {
      this.startForceAccumulationTime = Date.now();
      this.keyIsDown = true;
      this.forceRange.emit('force-range-start');
    }
  },

  trackPadDownHandler(e) {
    if (e.detail.id === 4 && !this.keyIsDown) {
      this.startForceAccumulationTime = Date.now();
      this.keyIsDown = true;
      this.forceRange.emit('force-range-start');
    }
  },

  keyUpHandler(e) {
    this.force = 0;
    if (e.keyCode === 32) {
      this.force =
        ((Date.now() - this.startForceAccumulationTime) / 1000) * 2 + 2;
      if (this.force > config.maxForce) {
        this.force = config.maxForce;
      }
      this.applyImpulse();
      this.forceGrabEnd(e);
      this.keyIsDown = false;
      this.forceRange.emit('force-range-stop');
      this.forceRange.object3D.scale.set(0, 1, 0);
    }
  },

  trackPadUpHandler(e) {
    this.force = 0;
    if (e.detail.id === 4) {
      this.force =
        ((Date.now() - this.startForceAccumulationTime) / 1000) * 2 + 2;
      if (this.force > config.maxForce) {
        this.force = config.maxForce;
      }
      this.applyImpulse();
      this.keyIsDown = false;
      this.forceRange.emit('force-range-stop');
      this.forceRange.object3D.scale.set(0, 1, 0);
    }
  },

  forceGrabEnd(e) {
    this.pointer.components['super-hands'].onGrabEndButton(e);
  },

  applyImpulse() {
    if (!this.grabbed || !this.grabbed.body) {
      return false;
    }

    const zeroPosition = this.getZeroPosition();
    const trashPosition = this.grabbed.object3D.position;

    const directionX = trashPosition.x - zeroPosition.x;
    const directionZ = trashPosition.z - zeroPosition.z;
    const vectorsLength = Math.sqrt(
      Math.pow(directionX, 2) + Math.pow(directionZ, 2),
    );

    const x = (directionX / vectorsLength) * this.force;
    const y = this.force;
    const z = (directionZ / vectorsLength) * this.force;

    this.grabbed.body.velocity.set(x, y, z);

    this.el.sceneEl.emit('trash-thrown', { trash: this.grabbed });
  },
});
