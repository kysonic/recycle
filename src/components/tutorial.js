AFRAME.registerComponent('tutorial', {
    schema: {},
    init() {
        const isTutorialPassed = window.localStorage.getItem('recycle:isTutorialPassed');
        if (!isTutorialPassed) {
            this.bindGameListeners = this.bindGameListeners.bind(this);
            this.removeGameListeners = this.removeGameListeners.bind(this);
            this.tutorialStart = this.tutorialStart.bind(this);
            this.grabStart = this.grabStart.bind(this);
            this.tutorialEnd = this.tutorialEnd.bind(this);

            this.headsetConnected = AFRAME.utils.device.checkHeadsetConnected();

            this.el.sceneEl.addEventListener('start-game', this.bindGameListeners);
            this.el.sceneEl.addEventListener('stop-game', this.removeGameListeners);

            this.timeout = setTimeout(this.tutorialEnd, 10000 * 6 * 5);
        }
    },

    remove() {
        this.removeGameListeners();
    },

    bindGameListeners() {
        this.el.sceneEl.addEventListener('start-wave', this.tutorialStart);
        this.el.sceneEl.addEventListener('grab-start', this.grabStart);
        this.el.sceneEl.addEventListener('trash-thrown', this.tutorialEnd);
    },

    tutorialStart(e) {
        const currentWave = e.detail.currentWave;
        if (currentWave === 1) {
            setTimeout(() => {
                const platformButton = this.headsetConnected ? 'TRIGGER BUTTON' : 'LEFT MOUSE BUTTON';
                this.el.setAttribute('text', {value: `GRAB THE TRASH VIA ${platformButton}`});
            }, 2000);
        }
    },

    grabStart() {
        const platformButton = this.headsetConnected ? 'TOUCHPAD BUTTON' : 'SPACE';
        this.el.setAttribute('text', {value: `THROW IT VIA ${platformButton}. HOLD TO THROW FURTHER.`});
    },

    tutorialEnd() {
        window.localStorage.setItem('recycle:isTutorialPassed', true);
        this.el.setAttribute('text', {value: ''});
        this.removeGameListeners();
    },

    removeGameListeners() {
        this.el.sceneEl.removeEventListener('start-wave', this.tutorialStart);
        this.el.sceneEl.removeEventListener('grab-start', this.grabStart);
        this.el.sceneEl.removeEventListener('trash-trowed', this.tutorialEnd);
    }
});
