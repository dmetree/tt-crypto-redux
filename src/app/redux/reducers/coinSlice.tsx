import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICrypto } from '../../interfaces/ICrypto';
import { IUser } from '../../interfaces/IUser';
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
    title: 'BTC',
    eur_rate: 0
  },
  isLoading: false,
  error: ''
}

export const coinSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCrypto: (state, action: PayloadAction<ISelectedCoin>) => {
      state.selectedCoin = action.payload;
    },
    // fetchCoins: (state, action: PayloadAction<ICrypto[]>) => {
    //   state.coins = action.payload
    // },
  },
})

export const { setCrypto } = coinSlice.actions
export default coinSlice.reducer