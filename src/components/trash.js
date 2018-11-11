import AFRAME from 'AFRAME';

AFRAME.registerComponent('trash', {
    schema: {
        type: {
            type: 'string',
            default: 'paper'
        }
    },
    init() {
        this.system.registerTrash(this);
    }
});
