import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PriceState {
  price_EUR?: number
}

const initialState: PriceState = {
  price_EUR: 250,
}

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setEURPrice: (state, action: PayloadAction<number>) => {
      state.price_EUR = action.payload
    },
  },
})

export const { setEURPrice } = priceSlice.actions
export default priceSlice.reducer