import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import balanceReducer from '../features/balanceSlice';
import betsReducer from '../features/betsSlice';
import usersReducer from '../features/usersSlice';
import startGameReducer from '../features/startGameSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    selectedBalance: balanceReducer,
    bets: betsReducer,
    users: usersReducer,
    startGame: startGameReducer,
  },
});
