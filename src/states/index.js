import AFRAME from 'aframe';
import {GAME_STATES, GAME_SETTING } from '../consts';

AFRAME.registerState({
    initialState: {
        score: 0,
        gameState: GAME_STATES.notStarted,
        currentWave: 0,
        hitPoints: GAME_SETTING.hitPoints
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
        },

        decreaseHitPoints(state, action) {
            state.hitPoints -= action.points;
        },

        increaseHitPoints(state, action) {
            state.hitPoints += action.points;
        }
    }
});
