import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Import the product slice
import authReducer from './authSlice'; // Assuming you have an authSlice
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer, // If you have auth slice
  },
});

export default store;
