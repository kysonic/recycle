import AFRAME from 'AFRAME';

AFRAME.registerComponent('game', {
    init() {
        setTimeout(()=>{
            this.el.emit('start-countdown')
        }, 2000);
    }
});
