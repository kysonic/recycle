AFRAME.registerSystem('trash-bin', {
  bins: [],

  init() {
    this.createBin = this.createBin.bind(this);
  },

  createBins(trashBins) {
    trashBins.forEach(this.createBin);
  },

  createBin(binData) {
    AFRAME.templates['trash-bin'].instance(binData);
  },

  registerBin(bin) {
    this.bins.push(bin);
  },

  dropBins() {
    this.bins.forEach((bin) => {
      bin.el.parentNode.removeChild(bin.el);
    });
    this.bins = [];
  },
});
