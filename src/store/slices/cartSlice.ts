import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ICartState {
  value: number;
  isLoading: boolean;
}

const initialState: ICartState = {
  value: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartRequested: (state) => {
      state.isLoading = true;
    },
    cartRequestFailed: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      // state.errors = action.payload;
    },
  },
});

const { actions, reducer: cartReducer } = cartSlice;
const { cartRequested, cartRequestFailed } = actions;

//getters
const getCartItems = () => (state: RootState) => state.cart.value;

export default cartReducer;
