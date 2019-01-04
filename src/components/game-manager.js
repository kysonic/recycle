import AFRAME from 'aframe';
import {GAME_STATES} from '../consts';

AFRAME.registerComponent('game-manager', {
    init() {
        this.startGame = this.startGame.bind(this);
        this.stopGame = this.stopGame.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.checkState = this.checkState.bind(this);

        this.el.addEventListener('start-game', this.startGame);
        this.el.addEventListener('stop-game', this.stopGame);
        this.el.addEventListener('stateupdate', this.checkState);
    },

    remove() {
        this.el.removeEventListener('start-game', this.startGame);
        this.el.removeEventListener('stop-game', this.stopGame);
        this.el.removeEventListener('stateupdate', this.checkState);
    },

    startGame() {
        if (GAME_STATES.notStarted === this.el.systems.state.state.gameState) {
            this.clearState();
            this.el.emit('setGameState', {gameState: GAME_STATES.inProgress});
            this.el.systems.router.changeRoute('game-field');
        }
    },

    stopGame() {
        if (GAME_STATES.inProgress === this.el.systems.state.state.gameState) {
            this.el.emit('setGameState', {gameState: GAME_STATES.notStarted});
            this.clear();
            this.clearState();
            this.el.systems.router.changeRoute('start-screen');
        }
    },

    gameOver() {
        if (GAME_STATES.inProgress === this.el.systems.state.state.gameState) {
            this.el.emit('setGameState', {gameState: GAME_STATES.notStarted});
            this.clear();
            this.el.systems.router.changeRoute('game-over');
        }
    },

    clear() {
        this.el.emit('stop-countdown');
        this.el.emit('drop-previous-level');
        this.el.emit('setCurrentWave', {currentWave: 0});
    },

    clearState() {
        this.el.emit('setScore', {score: 0});
        this.el.emit('setLives', {lives: 10});
    },

    checkState() {
        if (GAME_STATES.inProgress === this.el.systems.state.state.gameState) {
            if(this.el.systems.state.state.lives < 1) {
                setTimeout(()=> {
                    this.gameOver();
                }, 1000)
            }
        }
    }
});
