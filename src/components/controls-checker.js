import AFRAME, {utils} from 'AFRAME';

AFRAME.registerComponent('controls-checker', {
    schema: {
        headsetConnected: {
            type: 'boolean'
        },
        isDesktop: {
            type: 'boolean'
        },
        isMobile: {
            type: 'boolean'
        },
        isGearVR: {
            type: 'boolean'
        },
        isOculusGo: {
            type: 'boolean'
        }
    },
    init() {
        this.headsetConnected = utils.device.checkHeadsetConnected();
        this.isMobile = utils.device.isMobile();
        this.isDesktop = this.headsetConnected && !this.isMobile;
        this.isGearVR = utils.device.isGearVR();
        this.isOculusGo = utils.device.isOculusGo();

        this.setupControls();
    },
    setupControls() {
        if (this.isDesktop || this.isGearVR || this.isOculusGo) {
            this.createHand('right');
            if (this.isDesktop) {
                this.createHand('left');
            }
        } else if (this.isMobile) {
            this.createCursor();
        } else {
            // handle PC
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
        camera.appendChild(cursor);
    }
});
