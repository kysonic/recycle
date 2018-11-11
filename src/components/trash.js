import AFRAME from 'AFRAME';

AFRAME.registerComponent('trash', {
    schema: {
        type: {
            type: 'string',
            default: 'paper'
        }
    },
    init() {
        this.el.isTrash = true;
        this.system.registerTrash(this);
    }
});
