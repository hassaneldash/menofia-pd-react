import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/redux/counterSlice';
import cartReducer from '@/store/redux/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
