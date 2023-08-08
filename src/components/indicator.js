AFRAME.registerComponent('indicator', {
    schema: {},
    init() {
        this.runIndicator = this.runIndicator.bind(this);
        this.el.sceneEl.addEventListener('runIndicator', this.runIndicator);
    },

    runIndicator(e) {
        const {text, textColor, startPosition} = e.detail;
        this.el.setAttribute('text', {value: text, color: textColor});
        this.el.setAttribute('position', startPosition);
        const endPosition = Object.assign({}, startPosition);
        endPosition.y = endPosition.y + 1;
        this.el.setAttribute('animation', `property: position; from: ${startPosition.x} ${startPosition.y} ${startPosition.z}; to: ${endPosition.x} ${endPosition.y} ${endPosition.z}; dur: 500; startEvents: indicator-animation-start;`)
        setTimeout(()=> {
            this.el.setAttribute('visible', true);
            this.el.emit('indicator-animation-start');
            setTimeout(()=> {
                this.el.setAttribute('visible', false);
            }, 500);
        });
    }
});
