import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import priceReducer from './reducers/price';
import coinReducer from './reducers/coinSlice';
import promoReducer from './reducers/promoSlice';
import orderReducer from './reducers/addressRequestSlice';
import addressReducer from './reducers/addressSlice';
import transactionReducer from './reducers/transactionSlice';

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    promo: promoReducer,
    price: priceReducer,
    order: orderReducer,
    address: addressReducer,
    transaction: transactionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
