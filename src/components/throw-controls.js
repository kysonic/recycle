import AFRAME from 'aframe';
import config from '../config';

AFRAME.registerComponent('throw-controls', {
    grabbed: null,
    force: 3,
    startPosition: null,
    startForceAccumulationTime: 0,
    keyIsDown: false,

    init() {
        this.pointer = this.el;
        this.camera = document.getElementById('camera');
        this.forceRange = camera.querySelector('#forceRange');

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.grabStart = this.grabStart.bind(this);
        this.grabEnd = this.grabEnd.bind(this);
        this.applyImpulse = this.applyImpulse.bind(this);

        this.el.sceneEl.addEventListener('grab-start', this.grabStart);
        this.el.sceneEl.addEventListener('grab-end', this.grabEnd);
        this.pointer.addEventListener('trackpaddown', this.applyImpulse);

        document.body.addEventListener('keydown', this.keyDownHandler);
        document.body.addEventListener('keyup', this.keyUpHandler);
    },

    grabStart(e){
        this.grabbed = e.detail.target;
    },

    grabEnd(e){
        this.grabbed = null;
    },

    getZeroPosition() {
        return this.camera.object3D.position;
    },

    keyDownHandler(e) {
        if(e.keyCode === 32 && !this.keyIsDown) {
            this.startForceAccumulationTime = Date.now();
            this.keyIsDown = true;
            this.forceRange.emit('force-range-start');
        }
    },

    keyUpHandler(e) {
        this.force = 0;
        if(e.keyCode === 32) {
            this.force = ((Date.now() - this.startForceAccumulationTime) / 1000) * 2 + 2;
            if(this.force > config.maxForce) {
                this.force = config.maxForce;
            }
            this.applyImpulse();
            this.forceGrabEnd(e);
            this.keyIsDown = false;
            this.forceRange.emit('force-range-stop');
            this.forceRange.object3D.scale.set(0,1,0);
        }
    },

    forceGrabEnd(e) {
        this.pointer.components['super-hands'].onGrabEndButton(e);
    },

    applyImpulse() {
        if(!this.grabbed) {
            return false;
        }

        const zeroPosition = this.getZeroPosition();
        const pointerPosition = this.pointer.body.position;

        const x = (pointerPosition.x - zeroPosition.x) * this.force;
        const y = this.force;
        const z = (pointerPosition.z - zeroPosition.z) * this.force;

        this.grabbed.body.velocity.set(x , y,  z )
    }
});
