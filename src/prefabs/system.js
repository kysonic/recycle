import trashBin from './trash-bin';
import trash from './trash';

AFRAME.registerSystem('prefabs', {
  init: function () {
    this.prefabs = {
      trashBin,
      trash,
    };
  },

  instantiate(name, data) {
    const entity = document.createElement('a-entity');
    entity.innerHTML = this.prefabs[name](data);
    this.sceneEl.appendChild(entity);

    return entity;
  },
});
