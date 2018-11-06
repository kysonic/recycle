import AFRAME from 'AFRAME';

AFRAME.registerComponent('trash-bin', {
    init() {
        this.system.registerBin(this);
    }
});
