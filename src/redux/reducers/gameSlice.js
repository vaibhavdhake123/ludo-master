import {createSlice} from '@reduxjs/toolkit';
import {initalState} from './initialState';

export const gameSlice = createSlice({
  name: 'game',
  initialState: initalState,
  reducers: {
    resetGame: () => initalState,
    updateDiceNo: (state, action) => {
      state.diceNo = action.payload.diceNo;
      state.isDiceRolled = true;
    },
    enablePileSelection: (state, action) => {
      state.touchDiceBlock = true;
      state.pileSelectionPlayer = action.payload.playerNo;
    },
    enableCellSelection: (state, action) => {
      state.touchDiceBlock = true;
      state.cellSelectionPlayer = action.payload.playerNo;
    },
    disableTouch: state => {
      state.touchDiceBlock = true;
      state.cellSelectionPlayer = -1;
      state.pileSelectionPlayer = -1;
    },
    unfreezeDice: state => {
      state.touchDiceBlock = false;
      state.isDiceRolled = false;
    },
    updateFirework: (state, action) => {
      state.fireworks = action.payload;
    },
    announceWinner: (state, action) => {
      state.winner = action.payload;
    },
    updatePlayerChance: (state, action) => {
      state.chancePlayer = action.payload.chancePlayer;
      state.touchDiceBlock = false;
      state.isDiceRolled = false;
    },
  },
});

export const {
  resetGame,
  updateDiceNo,
  enableCellSelection,
  enablePileSelection,
  disableTouch,
  unfreezeDice,
  updateFirework,
  updatePlayerChance,
  announceWinner,
} = gameSlice.actions;

export default gameSlice.reducer;
