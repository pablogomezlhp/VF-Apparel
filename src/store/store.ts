import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productsReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;