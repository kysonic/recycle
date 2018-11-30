import AFRAME from 'AFRAME';
import '../templates/trash';
import '../templates/trash-bin';
import waveGenerator from '../lib/wave-generator';

AFRAME.registerComponent('game-field-manager', {
    init() {
        this.trashSystem = this.el.sceneEl.systems.trash;
        this.trashBinSystem = this.el.sceneEl.systems['trash-bin'];
        this.countdown = this.el.sceneEl.querySelector('#countdown');
        // Binds
        this.startWave = this.startWave.bind(this);
        this.startNextLevel = this.startNextLevel.bind(this);
        this.dropPreviousLevel = this.dropPreviousLevel.bind(this);
        // Countdown
        this.el.sceneEl.addEventListener('countdown-stopped', this.startWave);
        this.el.sceneEl.addEventListener('start-next-level', this.startNextLevel);
        this.el.sceneEl.addEventListener('drop-previous-level', this.dropPreviousLevel);
        // Start level 1
        this.startNextLevel();
    },

    startNextLevel() {
        // Wave
        this.el.sceneEl.emit('increaseCurrentWave');
        // Countdown
        console.log(this.el.sceneEl.systems.state.state.currentWave);
        if(this.el.sceneEl.systems.state.state.currentWave > 1) {
            this.countdown.setAttribute('countdown', {text: [`Level ${this.el.sceneEl.systems.state.state.currentWave}`, 'READY', 'STEADY', 'GO!']});
        }
        this.el.emit('start-countdown');
        // Wave
        this.el.sceneEl.currentWaveConfig = waveGenerator(this.el.sceneEl.systems.state.state.currentWave);
        this.initTrashBins(this.el.sceneEl.currentWaveConfig.trashBins);
    },

    dropPreviousLevel() {
        this.trashBinSystem.dropBins();
    },

    initTrashBins(trashBins) {
        this.trashBinSystem.createBins(trashBins);
    },

    startWave() {
        this.trashSystem.startTrashWave();
    }
});
