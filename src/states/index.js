import AFRAME from 'AFRAME';

const GAME_STATES = ['not-started', 'playing', 'finished'];

AFRAME.registerState({
    initialState: {
        score: 0,
        gameState: 'not-started'
    },

    handlers: {
        decreaseScore(state, action) {
            state.score -= action.points;
        },

        increaseScore(state, action) {
            state.score += action.points;
        }
    }
});
