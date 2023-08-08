AFRAME.registerSystem('trash-bin', {
  bins: [],

  init() {
    this.createBin = this.createBin.bind(this);
  },

  createBins(trashBins) {
    trashBins.forEach(this.createBin);
  },

  createBin(binData) {
    this.sceneEl.systems.prefabs.instantiate('trashBin', binData);
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
