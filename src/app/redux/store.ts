import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // payment_method: crypto,
    // selected_crypto: cryptoReducer,
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
