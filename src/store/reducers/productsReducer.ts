import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Product from '../../interfaces/Product';
import { errorType } from "../../types/types";


interface ProductState {
  data: Product[];
  status: string;
  error: string | null;
}

errorType.started
const initialState: ProductState = {
  data: [],
  status: errorType.started,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
      state.status = errorType.success;
    },
  },
});

export const { setData } = productsSlice.actions;

export default productsSlice.reducer;