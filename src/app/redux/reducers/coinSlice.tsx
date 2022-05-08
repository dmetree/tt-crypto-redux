import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICrypto } from '../../interfaces/ICrypto';

interface coinSlice {
  coins: ICrypto[],
  isLoading: boolean,
  error: string
}

const initialState: coinSlice = {
  coins: [],
  isLoading: false,
  error: ""
}

export const coinSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    coinFetching(state){
      state.isLoading = true;
    },
    coinFetchingSuccess(state, action: PayloadAction<ICrypto[]>){
      state.isLoading = false;
      state.error = "";
      state.coins = action.payload;
    },
    coinFetchingError(state, action: PayloadAction<string>){
      state.isLoading = false;
      state.error = action.payload;
    }
  },
})

export const { coinFetching, coinFetchingSuccess, coinFetchingError } = coinSlice.actions;
export default coinSlice.reducer;