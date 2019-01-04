import AFRAME, {utils} from 'aframe';

AFRAME.registerComponent('how-to-play', {
    schema: {},
    init() {
        this.headsetConnected = utils.device.checkHeadsetConnected();
        if(this.headsetConnected) {
            this.el.setAttribute('src', '#hdst');
        }
    }
});
