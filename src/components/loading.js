import AFRAME from 'aframe';

AFRAME.registerComponent('loading', {
    schema: {},
    init() {
        this.el.addEventListener('model-loaded', ()=> {
            const loading = document.getElementById('loading');
            loading.style.display = 'none';
        });
    }
});
