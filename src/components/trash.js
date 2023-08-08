AFRAME.registerComponent('trash', {
  schema: {
    type: {
      type: 'string',
      default: 'paper',
    },
    timeout: {
      type: 'number',
      default: 10000,
    },
  },

  init() {
    this.nodes = [];
    this.el.isTrash = true;
    this.system.registerTrash(this);
    this.setTimeout();

    this.el.addEventListener('grab-start', () => {
      this.el.sceneEl.emit('grab-start');
    });
  },

  onModelLoaded(e) {
    e.detail.model.traverse((node) => {
      if (node.isMesh) {
        this.nodes.push(node);
      }
    });
  },

  onHover() {
    this.nodes.forEach((node) => {
      node.material.transparent = true;
      node.material.opacity = 0.5;
    });
  },

  onHoverEnd() {
    this.nodes.forEach((node) => {
      node.material.transparent = false;
      node.material.opacity = 1;
    });
  },

  setTimeout() {
    this.timeout = setTimeout(() => {
      if (this && this.el && !this.el.isRemoved) {
        this.system.removeTrash(this.el);
        this.el.sceneEl.emit('decreaseLives', { points: 1 });
        this.el.sceneEl.emit('fail-sound');
        this.el.sceneEl.emit('runIndicator', {
          src: '#heart_tpnt',
          text: '-1',
          textColor: '#FF7D7D',
          startPosition: this.el.getAttribute('position'),
        });
      }
    }, this.data.timeout);
  },
});
