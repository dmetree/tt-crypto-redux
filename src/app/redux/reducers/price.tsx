import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPrice } from '../../interfaces/IPrice';



const initialState: IPrice = {
  price_eur: 250,
}

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setEURPrice: (state, action: PayloadAction<number>) => {
      state.price_eur = action.payload
    },
  },
})

export const { setEURPrice } = priceSlice.actions
export default priceSlice.reducer