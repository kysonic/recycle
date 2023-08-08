AFRAME.registerComponent('how-to-play', {
  schema: {},
  init() {
    setTimeout(() => {
      this.checkDevice();
    }, 0);
  },
  checkDevice() {
    this.headsetConnected = AFRAME.utils.device.checkHeadsetConnected();
    document.getElementById('hot-to-plane').setAttribute('src', this.headsetConnected ? '#hdst' : '#dsktp' )
  },
});
