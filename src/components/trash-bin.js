import { TRASH_TYPES } from '../consts';

AFRAME.registerComponent('trash-bin', {
  schema: {
    type: {
      type: 'string',
      default: 'paper',
    },
  },
  init() {
    this.system.registerBin(this);
    this.changeColor = this.changeColor.bind(this);
    this.model = this.el.querySelector('.model');
    this.model.addEventListener('model-loaded', this.changeColor);
  },
  remove() {
    this.model.removeEventListener('model-loaded', this.changeColor);
  },
  changeColor(e) {
    e.detail.model.traverse((node) => {
      if (node.isMesh) {
        node.material.color = new THREE.Color(
          TRASH_TYPES.find((t) => t.type === this.data.type).color,
        );
      }
    });
  },
});
