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
        },
        animation: {
            type: 'string',
            default: 'property: scale; easing: easeInSine; from: 0 0 0; to: 2 2 2;'
        },
        textStyles: {
            type: 'string',
            default: 'align: center; width: 3; color: white; font: https://cdn.aframe.io/fonts/Roboto-msdf.json'
        },
        latestDelay: {
            type: 'number',
            default: 1000
        }
    },

    init() {
        this.bindListeners();
        this.setupAnimation();
        this.styleText();
    },

    bindListeners() {
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.runPhrase = this.runPhrase.bind(this);

        this.el.sceneEl.addEventListener('start-countdown', this.start);
        this.el.sceneEl.addEventListener('stop-countdown', this.stop);
    },

    remove() {
        this.el.sceneEl.removeEventListener('start-countdown', this.start);
        this.el.sceneEl.removeEventListener('stop-countdown', this.stop);
    },

    setupAnimation() {
        this.el.setAttribute('animation__scale', `${this.data.animation}dur: ${this.data.interval}; startEvents: countdown-run-phrase; pauseEvents: countdown-pause-phrase`);
    },

    styleText() {
        this.el.setAttribute('text', this.data.textStyles);
    },

    start() {
        this.el.emit('countdown-started');
        this.interval = setInterval(this.runPhrase, this.data.interval);
    },

    runPhrase() {
        if(this.data.currentItem >= this.data.text.length) {
            return this.stop();
        }
        this.el.emit('countdown-run-phrase');
        setTimeout(()=>{
            this.el.setAttribute('text', {value: this.data.text[this.data.currentItem]});
            this.data.currentItem++;
        }, 100);

    },

    stop() {
        this.data.currentItem = 0;
        clearInterval(this.interval);
        this.el.emit('countdown-stopped');
        setTimeout(()=> {
            this.el.setAttribute('text', {value: ''});
        }, this.data.latestDelay)
    }
});
