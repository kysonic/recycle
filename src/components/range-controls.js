import AFRAME from 'aframe';

AFRAME.registerComponent('range-controls', {
    grabbed: null,
    force: 3,
    startPosition: null,

    init() {
        this.pointer = this.el;
        this.camera = document.getElementById('camera');
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.grabStart = this.grabStart.bind(this);
        this.grabEnd = this.grabEnd.bind(this);
        this.applyImpulse = this.applyImpulse.bind(this);

        this.el.sceneEl.addEventListener('grab-start', this.grabStart);
        this.el.sceneEl.addEventListener('grab-end', this.grabEnd);
        this.pointer.addEventListener('trackpaddown', this.applyImpulse);

        document.body.addEventListener('keydown', this.keyDownHandler);
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
        if(e.keyCode === 32) {
            this.applyImpulse();
            this.forceGrabEnd(e);
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
