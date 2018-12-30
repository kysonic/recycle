import AFRAME from 'aframe';

AFRAME.registerComponent('to-camera', {
    schema: {},
    init() {
        this.camera = document.getElementById('camera');
        //this.camera.appendChild(this.el);
    }
});
