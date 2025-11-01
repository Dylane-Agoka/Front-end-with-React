import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './Components/CartSlice';

const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});

export default store;