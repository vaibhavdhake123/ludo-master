import {createSlice} from '@reduxjs/toolkit';
import { initalState } from './initialState';

export const gameSlice = createSlice({
    name:'game',
    initialState:initalState,
    reducers:{
        resetGame :()=> initalState,
    },
});

export const {resetGame} = gameSlice.actions

export default gameSlice.reducer