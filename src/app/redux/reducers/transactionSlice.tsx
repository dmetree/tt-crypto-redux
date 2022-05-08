import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITransaction } from '../../interfaces/ITransaction';

interface transactionSlice {
  transaction: ITransaction,
  isLoading: boolean,
  error: string
}

const initialState: transactionSlice = {
  transaction: {
    transaction: ""
  },
  isLoading: false,
  error: ""
}

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    transactionFetching(state){
      state.isLoading = true;
    },
    transactionFetchingSuccess(state, action: PayloadAction<ITransaction>){
      state.isLoading = false;
      state.error = '';
      state.transaction = action.payload;
    },
    transactionFetchingError(state, action: PayloadAction<string>){
      state.isLoading = false;
      state.error = action.payload;
    }
  },
})

export const { transactionFetching, transactionFetchingSuccess, transactionFetchingError } = transactionSlice.actions;
export default transactionSlice.reducer;