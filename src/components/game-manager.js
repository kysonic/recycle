import AFRAME from 'aframe';
import {GAME_STATES} from '../consts';

AFRAME.registerComponent('game-manager', {
    init() {
        this.startGame = this.startGame.bind(this);
        this.el.addEventListener('start-game', this.startGame);
    },

    startGame() {
        if(GAME_STATES.notStarted === this.el.systems.state.state.gameState) {
            this.el.emit('setGameState', {gameState: GAME_STATES.inProgress});
            this.el.systems.router.changeRoute('game-field');
        }
    }
});
