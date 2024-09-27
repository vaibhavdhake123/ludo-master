export const selectCurrentPostion = state => state.game.currentPostion;
export const selectCurrentPlayerChance = state => state.game.PlayerChance;
export const selectDiceRolled = state => state.game.isDiceRolled;
export const selectDiceNo = state => state.game.diceNo;

export const selectPlayer1 = state => state.game.player1;
export const selectPlayer2 = state => state.game.player2;
export const selectPlayer3 = state => state.game.player3;
export const selectPlayer4 = state => state.game.player4;

export const selectPocketPileSelection = state => state.game.pileSelectionPlayer;
export const selectCellSelection = state => state.game.cellselectionPlay;
export const selectDiceTouch = state => state.game.touchDiceBlock
export const selectFireworks = state => state.game.fireworks;