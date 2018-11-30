import AFRAME from 'AFRAME';

AFRAME.registerSystem('trash-bin', {
    bins: [],

    init() {
        this.createBin = this.createBin.bind(this);
    },

    createBins(trashBins) {
        trashBins.forEach(this.createBin);
    },

    createBin(binData) {
        AFRAME.templates['trash-bin'].init(binData);
    },

    registerBin(bin) {
        this.bins.push(bin);
    },

    dropBins() {
        this.bins.forEach((bin) => {
           this.el.removeChild(bin.el);
        });
        this.bins = [];
    }
});
