import AFRAME from 'AFRAME';

AFRAME.registerComponent('countdown', {
    schema: {
        currentItem: {
            type: 'number',
            default: 0
        },
        text: {
            type: 'array',
            default: []
        },
        interval: {
            type: 'number',
            default: 500
        }
    },

    init() {
        this.bindListeners();
        this.styleText();
    },

    styleText() {
        this.el.setAttribute('text', 'align: center; width: 3; color: red;');
    },

    bindListeners() {
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.runPhrase = this.runPhrase.bind(this);

        this.el.sceneEl.addEventListener('start-countdown', this.start);
        this.el.sceneEl.addEventListener('stop-countdown', this.stop);
    },

    remove() {
        this.unbindListeners();
    },

    unbindListeners() {
        this.el.sceneEl.removeEventListener('start-countdown', this.start);
        this.el.sceneEl.removeEventListener('stop-countdown', this.stop);
    },

    start() {
        this.el.emit('countdown-started');
        this.interval = setInterval(this.runPhrase, this.data.interval);
    },

    runPhrase() {
        if(this.data.currentItem >= this.data.text.length) {
            return this.stop();
        }
        this.el.setAttribute('text', {value: this.data.text[this.data.currentItem]});
        this.data.currentItem++;
    },

    stop() {
        this.data.currentItem = 0;
        clearInterval(this.interval);
        this.el.setAttribute('text', {value: ''});
        this.el.emit('countdown-stopped');
    }
});
