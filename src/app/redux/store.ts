import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cryptoReducer from './reducers/crypto';
import priceReducer from './reducers/price';
import coinReducer from './reducers/coinSlice';
import userReducer from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    coin: coinReducer,
    price: priceReducer,
    users: userReducer
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
