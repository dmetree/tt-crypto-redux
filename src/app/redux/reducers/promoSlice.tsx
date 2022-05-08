import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPromo } from '../../interfaces/IPromo';

interface promoSlice {
  promos: IPromo[],
  isLoading: boolean,
  error: string
}

const initialState: promoSlice = {
  promos: [],
  isLoading: false,
  error: ""
}

export const promoSlice = createSlice({
  name: "promo",
  initialState,
  reducers: {
    promoFetching(state){
      state.isLoading = true;
    },
    promoFetchingSuccess(state, action: PayloadAction<IPromo[]>){
      state.isLoading = false;
      state.error = "";
      state.promos = action.payload;
    },
    promoFetchingError(state, action: PayloadAction<string>){
      state.isLoading = false;
      state.error = action.payload;
    }
  },
})

export const { promoFetching, promoFetchingSuccess, promoFetchingError } = promoSlice.actions;
export default promoSlice.reducer;