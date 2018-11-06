import AFRAME from 'AFRAME';

AFRAME.registerSystem('trash', {
    schema: {
        trash: {
            type: 'array',
            default: []
        }
    },
    registerTrash(bin) {
        this.data.trash.push(bin);
    }
});
