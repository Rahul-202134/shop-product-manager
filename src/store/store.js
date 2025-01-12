import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Import the product slice
import authReducer from './authSlice'; // Assuming you have an authSlice

const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer, // If you have auth slice
  },
});

export default store;
