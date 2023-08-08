AFRAME.registerComponent('controls-checker', {
  schema: {
    headsetConnected: {
      type: 'boolean',
    },
    isDesktop: {
      type: 'boolean',
    },
    isMobile: {
      type: 'boolean',
    },
    isGearVR: {
      type: 'boolean',
    },
    isOculusGo: {
      type: 'boolean',
    },
  },
  init() {
    this.headsetConnected = AFRAME.utils.device.checkHeadsetConnected();
    if (this.headsetConnected && window.ga) {
      window.ga('send', 'event', 'device', 'headset');
    }
    this.isMobile = AFRAME.utils.device.isMobile();
    this.isDesktop = this.headsetConnected && !this.isMobile;
    this.isMobileVR = AFRAME.utils.device.isMobileVR();
    this.camera = document.getElementById('camera');

    this.setupControls();
  },
  setupControls() {
    if (this.isDesktop || this.isMobileVR) {
      this.createHand('right');
      this.createHand('left');
    } else {
      this.createCursor();
    }
  },
  createHand(hand) {
    const entity = document.createElement('a-entity');
    entity.id = `${hand}Hand`;
    entity.setAttribute('mixin', `controllers-${hand} point`);
    this.el.appendChild(entity);
  },
  createCursor() {
    const camera = document.getElementById('camera');
    const cursor = document.createElement('a-cursor');
    cursor.id = 'cursor';
    cursor.setAttribute('mixin', 'point');
    cursor.setAttribute('material', { color: '#EAEAEC', shader: 'flat' });
    camera.appendChild(cursor);
  },
});
