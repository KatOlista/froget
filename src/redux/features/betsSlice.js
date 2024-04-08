import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loaded: false,
  hasError: false,
  bets: [],
};

export const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loaded = action.payload;
    },
    setError: (state, action) => {
      state.hasError = action.payload;
    },
    setBets: (state, action) => {
      state.bets = action.payload;
    },
  },
});

export default betsSlice.reducer;
export const { setBets, setLoading, setError } = betsSlice.actions;
