import AFRAME from 'AFRAME';

AFRAME.registerComponent('trash', {
    init() {
        this.system.registerTrash(this);
    }
});
