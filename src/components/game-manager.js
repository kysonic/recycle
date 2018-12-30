import AFRAME from 'aframe';
import {GAME_STATES} from '../consts';

AFRAME.registerComponent('game-manager', {
    init() {
        this.startGame = this.startGame.bind(this);
        this.stopGame = this.stopGame.bind(this);
        this.el.addEventListener('start-game', this.startGame);
        this.el.addEventListener('stop-game', this.stopGame);
    },

    remove() {
        this.el.removeEventListener('start-game', this.startGame);
        this.el.removeEventListener('stop-game', this.stopGame);
    },

    startGame() {
        if (GAME_STATES.notStarted === this.el.systems.state.state.gameState) {
            this.el.emit('setGameState', {gameState: GAME_STATES.inProgress});
            this.el.systems.router.changeRoute('game-field');
        }
    },

    stopGame() {
        if (GAME_STATES.inProgress === this.el.systems.state.state.gameState) {
            this.el.emit('setGameState', {gameState: GAME_STATES.notStarted});
            this.clear();
            this.el.systems.router.changeRoute('start-screen');
        }
    },

    clear() {
        this.el.emit('stop-countdown');
        this.el.emit('drop-previous-level');
        this.el.emit('setCurrentWave', {currentWave: 0});
        this.el.emit('setScore', {score: 0});
    }
});
