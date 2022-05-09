import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISelectedCoin } from '../../interfaces/ISelectedCoin';
import { ISelectedPromo } from '../../interfaces/ISelectedPromo';
import { ICryptoPrice } from '../../interfaces/ICryptoPrice';
import { IOrderInfo} from '../../interfaces/IOrderInfo';

interface addressRequestSlice {
  orderInfo: IOrderInfo,
  isLoading: boolean,
  error: string
}

const initialState: addressRequestSlice = {
  orderInfo: {
    price: {
      crypto_price: 0,
    },
    selectedCoin: {
      src: "",
      name: "",
      eur_rate: 0
    },
    selectedPromo: {
      id: "",
      name: "",
    }, 
  },
  isLoading: false,
  error: ""
}

export const addressRequestSlice = createSlice({
  name: "addressRequest",
  initialState,
  reducers: {
    setCoin(state, action: PayloadAction<ISelectedCoin>) {
      state.orderInfo.selectedCoin = action.payload;
    },
    setPromo(state, action: PayloadAction<ISelectedPromo>) {
      state.orderInfo.selectedPromo = action.payload;
    },
    setCryptoPrice(state, action: PayloadAction<ICryptoPrice>) {
      state.orderInfo.price = action.payload;
    },
    
    orderRequestPush(state){
      state.isLoading = true;
    },
    orderRequestPushSuccess(state, action: PayloadAction<IOrderInfo>){
      state.isLoading = false;
      state.error = "";
      // state.coins = action.payload;
    },
    orderRequestPushError(state, action: PayloadAction<string>){
      state.isLoading = false;
      state.error = action.payload;
    }
  },
})

export const { 
  setCoin,
  setCryptoPrice,
  setPromo,
  orderRequestPush, 
  orderRequestPushSuccess, 
  orderRequestPushError 
} = addressRequestSlice.actions;
export default addressRequestSlice.reducer;