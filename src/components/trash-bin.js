import AFRAME from 'aframe';

AFRAME.registerComponent('trash-bin', {
    schema: {
        type: {
            type: 'string',
            default: 'paper'
        }
    },
    init() {
        this.system.registerBin(this);
    }
});
