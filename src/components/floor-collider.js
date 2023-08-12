AFRAME.registerComponent('floor-collider', {
  schema: {},
  init() {
    this.scene = this.el.sceneEl;
    this.collide = this.collide.bind(this);
    this.sound = this.el.sceneEl.querySelector('#gameFieldSound');
    this.el.addEventListener('collide', this.collide.bind(this));
  },

  collide(e) {
    const trash = e.detail.body.el;
    if (!trash || trash.isSounded) {
      return false;
    }
    const type = trash.getAttribute('trash').type;
    trash.isSounded = true;
    this.sound.setAttribute('sound', { src: `#${type}Hit` });
    this.sound.components.sound.playSound();
    this.el.emit('floor-collided');
    setTimeout(() => {
      trash.isSounded = false;
    }, 500);
  },
});
