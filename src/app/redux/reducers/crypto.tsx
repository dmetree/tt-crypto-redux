import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CryptoState {
  selected_crypto?: string
}

const initialState: CryptoState = {
  selected_crypto: 'ADA'
}

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCrypto: (state, action: PayloadAction<string>) => {
      state.selected_crypto = action.payload
    },
  },
})

export const { setCrypto } = cryptoSlice.actions
export default cryptoSlice.reducer