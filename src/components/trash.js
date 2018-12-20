import AFRAME from 'aframe';

AFRAME.registerComponent('trash', {
    schema: {
        type: {
            type: 'string',
            default: 'paper'
        },
        timeout: {
            type: 'number',
            default: 10000
        }
    },

    init() {
        this.el.isTrash = true;
        this.system.registerTrash(this);
        this.setTimeout();
    },

    setTimeout() {
        setTimeout(() => {
            if (this && this.el) {
                this.system.removeTrash(this.el);
            }
        }, this.data.timeout);
    }
});
