AFRAME.registerComponent('trash-bin-collider', {
  schema: {},
  init() {
    this.scene = this.el.sceneEl;
    this.collide = this.collide.bind(this);
    this.el.addEventListener('collide', this.collide);
  },

  collide(e) {
    const trash = e.detail.body.el;
    if (!trash) {
      return false;
    }
    const binType = this.el.parentNode.getAttribute('trash-bin').type;
    const trashType = trash.getAttribute('trash').type;
    if (trash.isTrash && !trash.isCollided) {
      trash.isCollided = true;
      this.scene.systems.trash.removeTrash(trash);
      if (binType == trashType) {
        this.scene.emit('increaseScore', { points: 10 });
        this.scene.emit('runIndicator', {
          text: '+10',
          textColor: '#40EA00',
          startPosition: trash.getAttribute('position'),
        });
        this.scene.emit('level-up-sound');
      } else {
        this.scene.emit('runIndicator', {
          text: '-1',
          textColor: '#FF7D7D',
          startPosition: trash.getAttribute('position'),
        });
        this.scene.emit('decreaseLives', { points: 1 });
        this.scene.emit('fail-sound');
      }
    }
  },
});
