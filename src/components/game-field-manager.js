import AFRAME from 'AFRAME';
import '../templates/trash';
import '../templates/trash-bin';

AFRAME.registerComponent('game-field-manager', {
    init() {
        this.trashSystem = this.el.sceneEl.systems.trash;
        this.trashBinSystem = this.el.sceneEl.systems['trash-bin'];
        // Inits
        this.initTrashBins(this.el.sceneEl.currentWaveConfig.trashBins);
        // Binds
        this.startWave = this.startWave.bind(this);
        // Countdown
        this.el.emit('start-countdown');
        this.el.sceneEl.addEventListener('countdown-stopped', this.startWave)
    },

    initTrashBins(trashBins) {
        this.trashBinSystem.createBins(trashBins);
    },

    startWave() {
        this.trashSystem.startTrashWave();
    }
});
