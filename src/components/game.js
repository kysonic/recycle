import AFRAME from 'AFRAME';

AFRAME.registerComponent('game', {
    init() {
        this.el.emit('start-countdown')
    }
});
