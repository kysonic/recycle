import AFRAME from 'AFRAME';

AFRAME.registerComponent('trash-bin-collider', {
    schema: {},
    init() {
        const scene = document.querySelector('a-scene');

        this.el.addEventListener('collide', function (e) {
            const trash = e.detail.body.el;

            if (trash.getAttribute('mixin') === 'cube' && !trash.isCollided) {
                scene.object3D.remove(trash.object3D);
                trash.isCollided = true;
                scene.emit('increaseScore', {points: 10});
            }
        });
    }
});
