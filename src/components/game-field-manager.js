import waveGenerator from '../lib/wave-generator';
import { GAME_STATES } from '../consts';

AFRAME.registerComponent('game-field-manager', {
  init() {
    this.trashSystem = this.el.sceneEl.systems.trash;
    this.trashBinSystem = this.el.sceneEl.systems['trash-bin'];
    this.countdown = this.el.sceneEl.querySelector('#countdown');
    this.sound = this.el.sceneEl.querySelector('#gameFieldSound');
    // Binds
    this.startWave = this.startWave.bind(this);
    this.startNextLevel = this.startNextLevel.bind(this);
    this.dropPreviousLevel = this.dropPreviousLevel.bind(this);
    this.levelUpSound = this.levelUpSound.bind(this);
    this.failSound = this.failSound.bind(this);
    // Countdown
    this.el.sceneEl.addEventListener('countdown-stopped', this.startWave);
    this.el.sceneEl.addEventListener('start-next-level', this.startNextLevel);
    this.el.sceneEl.addEventListener(
      'drop-previous-level',
      this.dropPreviousLevel,
    );
    this.el.sceneEl.addEventListener('level-up-sound', this.levelUpSound);
    this.el.sceneEl.addEventListener('fail-sound', this.failSound);
    // Start level 1
    this.startNextLevel();
  },

  levelUpSound() {
    this.sound.setAttribute('sound', { src: '#levelUp' });
    this.sound.components.sound.playSound();
  },

  failSound() {
    this.sound.setAttribute('sound', { src: '#fail' });
    this.sound.components.sound.playSound();
  },

  remove() {
    this.el.sceneEl.removeEventListener('countdown-stopped', this.startWave);
    this.el.sceneEl.removeEventListener(
      'start-next-level',
      this.startNextLevel,
    );
    this.el.sceneEl.removeEventListener(
      'drop-previous-level',
      this.dropPreviousLevel,
    );
  },

  startNextLevel() {
    // Wave
    this.el.sceneEl.emit('increaseCurrentWave');
    // Countdown
    if (this.el.sceneEl.systems.state.state.currentWave > 1) {
      this.countdown.setAttribute('countdown', {
        text: [
          `Level ${this.el.sceneEl.systems.state.state.currentWave}`,
          'READY',
          'RECYCLE!',
        ],
      });
    } else {
      this.countdown.setAttribute('countdown', {
        text: ['READY', 'STEADY', 'RECYCLE!'],
      });
    }
    this.el.emit('start-countdown');
    // Wave
    this.el.sceneEl.currentWaveConfig = waveGenerator(
      this.el.sceneEl.systems.state.state.currentWave,
    );
    this.initTrashBins(this.el.sceneEl.currentWaveConfig.trashBins);
  },

  dropPreviousLevel() {
    this.trashSystem.stopTrashWave();
    this.trashSystem.dropTrash();
    this.trashBinSystem.dropBins();
  },

  initTrashBins(trashBins) {
    this.trashBinSystem.createBins(trashBins);
  },

  startWave() {
    if (
      this.el.sceneEl.systems.state.state.gameState !== GAME_STATES.inProgress
    ) {
      return false;
    }
    this.el.emit('start-wave', {
      currentWave: this.el.sceneEl.systems.state.state.currentWave,
    });
    this.trashSystem.startTrashWave();
  },
});
