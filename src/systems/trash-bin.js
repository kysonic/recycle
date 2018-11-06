import AFRAME from 'AFRAME';

AFRAME.registerSystem('trash-bin', {
    schema: {
        bins: {
            type: 'array',
            default: []
        }
    },
    registerBin(bin) {
        this.data.bins.push(bin);
    }
});
