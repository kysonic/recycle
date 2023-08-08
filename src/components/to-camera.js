AFRAME.registerComponent('to-camera', {
    schema: {},
    init() {
        this.camera = document.getElementById('camera');
        this.clone = this.el.cloneNode(true);
        this.clone.removeAttribute('to-camera');
        this.clone.removeAttribute('data-route-id');
        this.camera.appendChild(this.clone);
        this.el.setAttribute('visible', 'false');
    },

    remove() {
        this.camera.removeChild(this.clone);
    }
});
