import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAddress } from '../../interfaces/IAddress';

interface addressSlice {
  address: IAddress,
  isLoading: boolean,
  error: string
}

const initialState: addressSlice = {
  address: {
    address: ""
  },
  isLoading: false,
  error: ""
}

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addressFetching(state){
      state.isLoading = true;
    },
    addressFetchingSuccess(state, action: PayloadAction<IAddress>){
      state.isLoading = false;
      state.error = '';
      state.address = action.payload;
    },
    addressFetchingError(state, action: PayloadAction<string>){
      state.isLoading = false;
      state.error = action.payload;
    }
  },
})

export const { addressFetching, addressFetchingSuccess, addressFetchingError } = addressSlice.actions;
export default addressSlice.reducer;