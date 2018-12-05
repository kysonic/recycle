import AFRAME from 'aframe';
import {GAME_STATES} from '../consts';

AFRAME.registerComponent('game-manager', {
    init() {
        this.startGame = this.startGame.bind(this);
        this.el.addEventListener('start-game', this.startGame);
        this.el.addEventListener('fail-game', this.failGame);
    },

    startGame() {
        if(GAME_STATES.notStarted === this.el.systems.state.state.gameState) {
            this.el.emit('setGameState', {gameState: GAME_STATES.inProgress});
            this.el.systems.router.changeRoute('game-field');
        }
    },

    failGame() {
        const scene = document.querySelector('a-scene');

        // sate new game state
        scene.emit('setGameState', {gameState: GAME_STATES.finished});

        // stop trash generation and clean game field
        this.trashSystem = scene.systems.trash;
        this.trashSystem.stopTrashWave();
        this.trashSystem.removeAllTrash();

        // show game over field
        console.log('available systems', scene.systems);
        scene.systems.router.changeRoute('game-over-field');
    }

});
