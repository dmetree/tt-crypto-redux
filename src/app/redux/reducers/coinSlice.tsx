import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICrypto } from '../../interfaces/ICrypto';
import { ISelectedCoin } from '../../interfaces/ISelectedCoin'

interface coinSlice {
  coins: ICrypto[],
  selectedCoin: ISelectedCoin,
  isLoading: boolean,
  error: string
}

const initialState: coinSlice = {
  coins: [],
  selectedCoin: {
    src: "",
    name: '',
    eur_rate: 0
  },
  isLoading: false,
  error: ''
}

export const coinSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCrypto(state, action: PayloadAction<ISelectedCoin>) {
      state.selectedCoin = action.payload;
    },
    coinFetching(state){
      state.isLoading = true;
    },
    coinFetchingSuccess(state, action: PayloadAction<ICrypto[]>){
      state.isLoading = false;
      state.error = '';
      state.coins = action.payload;
    },
    coinFetchingError(state, action: PayloadAction<string>){
      state.isLoading = false;
      state.error = action.payload
     
    }
  },
})

export const { setCrypto, coinFetching, coinFetchingSuccess, coinFetchingError } = coinSlice.actions;
export default coinSlice.reducer;