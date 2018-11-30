import AFRAME from 'AFRAME';
import {GAME_STATES} from '../consts';

AFRAME.registerState({
    initialState: {
        score: 0,
        gameState: GAME_STATES.notStarted,
        currentWave: 0,
    },

    handlers: {
        decreaseScore(state, action) {
            state.score -= action.points;
        },

        increaseScore(state, action) {
            state.score += action.points;
        },

        setGameState(state, action) {
            state.gameState = action.gameState;
        },

        increaseCurrentWave(state, action) {
            state.currentWave++;
        },

        setCurrentWave(state, action) {
            state.currentWave = action.currentWave;
        }
    }
});
