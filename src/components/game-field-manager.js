import AFRAME from 'AFRAME';
import '../templates/trash';
import '../templates/trash-bin';
import waveGenerator from '../lib/wave-generator';


const generateRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

AFRAME.registerComponent('game-field-manager', {
    currentWave: {},
    interval: null,
    init() {
        this.currentWave = waveGenerator(this.el.sceneEl.systems.state.state.currentWave);
        this.trashSystem = this.el.sceneEl.systems.trash;
        this.trashBinSystem = this.el.sceneEl.systems['trash-bin'];
        this.initTrashBins(this.currentWave.trashBins);
        this.el.emit('start-countdown');

        this.startWave = this.startWave.bind(this);
        this.el.sceneEl.addEventListener('countdown-stopped', this.startWave)
    },

    initTrashBins(trashBins) {
        this.trashBinSystem.createBins(trashBins)
    },

    startWave() {
        console.log(this.currentWave);
    },

    initTrash(trashData) {

    }
});
