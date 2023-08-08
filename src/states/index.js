import { GAME_STATES } from '../consts';

AFRAME.registerState({
  initialState: {
    score: 0,
    lives: 10,
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

    setScore(state, action) {
      state.score = action.score;
    },

    setGameState(state, action) {
      state.gameState = action.gameState;
    },

    increaseCurrentWave(state, action) {
      state.currentWave++;
    },

    decreaseCurrentWave(state, action) {
      state.currentWave--;
    },

    setCurrentWave(state, action) {
      state.currentWave = action.currentWave;
    },

    decreaseLives(state, action) {
      state.lives -= action.points;
    },

    increaseLives(state, action) {
      state.lives += action.points;
    },

    setLives(state, action) {
      state.lives = action.lives;
    },
  },
});
