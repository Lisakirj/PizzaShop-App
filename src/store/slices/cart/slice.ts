import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch } from "../../store";
import { customAlphabet } from "nanoid";

import { CartItem, ICartState, ActiveItems } from "./types";
import { calcTotalPrice } from "../../../utils/helpers/calcTotalPrice";

const initialState: ICartState = {
  items: [],
  activeType: "",
  activeSize: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartItemAdded: (state, action: PayloadAction<CartItem>) => {
      // console.log("payload", action.payload);
      const findItem = state.items.find(
        (obj) =>
          obj.title === action.payload.title &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          id: +customAlphabet("123456789", 3)(),
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    activeItemsSet: (state, action: PayloadAction<ActiveItems>) => {
      state.activeType = action.payload.type;
      state.activeSize = action.payload.size;
    },

    cartItemRemoved: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id != action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    cartItemDecreased: (state, action: PayloadAction<number>) => {
      const item = state.items.find((obj) => obj.id === action.payload);
      if (item && item.count > 1) {
        item.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    cartCleared: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

const { actions, reducer: cartReducer } = cartSlice;
const {
  cartItemAdded,
  cartCleared,
  cartItemRemoved,
  cartItemDecreased,
  activeItemsSet,
} = actions;

export const setActiveItems =
  (items: ActiveItems) => (dispatch: AppDispatch) => {
    dispatch(activeItemsSet(items));
  };
export const addCartItem = (item: CartItem) => (dispatch: AppDispatch) => {
  dispatch(cartItemAdded(item));
};
export const removeCartItem = (id: number) => (dispatch: AppDispatch) => {
  dispatch(cartItemRemoved(id));
};
export const clearCart = () => (dispatch: AppDispatch) => {
  dispatch(cartCleared());
};
export const decreaseCartItem = (id: number) => (dispatch: AppDispatch) => {
  dispatch(cartItemDecreased(id));
};

export default cartReducer;
