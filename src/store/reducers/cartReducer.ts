import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import Product from '../../interfaces/Product';
import { getEncryptedLocalStorage, setEncryptedLocalStorage } from '../../utils/helpers';

export interface CartState {
  items: Product[];
  itemCount: number;
  totalCost: number;
}
const storagedCartItems = getEncryptedLocalStorage("cartItems") as CartState;

const initialState: CartState = {
  items:  storagedCartItems?.items || [],
  itemCount: storagedCartItems?.itemCount || 0,
  totalCost: storagedCartItems?.totalCost || 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: { payload: Product }) => {
      const { payload } = action;

      const isAlready = !!state.items.find(product => product. id === payload.id);
      if(isAlready) {
        toast.warning(`${payload.title} is already in the cart`, {
          position: "top-right",
          theme: "colored"
        });
        return;
      }
      toast.success(`${payload.title} added to cart`, {
        position: "top-right",
        theme: "colored"
      });
      const cartItems = {
        ...state,
        items: [payload, ...state.items],
        itemCount: state.itemCount + 1,
        totalCost: state.totalCost + parseFloat(payload.variants[0].price),
      };

      setEncryptedLocalStorage("cartItems", cartItems);
      return cartItems
    },
    removeFromCart: (state, action) => {
      const { payload } = action;
      toast.success(`${payload.title} removed from cart`, {
        position: "top-right",
      });

      
      const cartItems = {
        ...state,
        items: state.items.filter((item: Product) => item.id !== payload.id),
        itemCount: state.itemCount - 1,
        totalCost: state.totalCost - parseFloat(payload.variants[0].price),
      };
      setEncryptedLocalStorage("cartItems", cartItems);

      return cartItems;
    },
    updateCart: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;