import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../store";
import { CartItem } from "../../types/cartItem";
import { calcTotalPrice } from "../../utils/helpers/calcTotalPrice";

import { customAlphabet } from "nanoid";
import { createSelector } from "@reduxjs/toolkit";

type activeItems = {
  type: string;
  size: number;
};

interface ICartState {
  items: CartItem[];
  activeType: string;
  activeSize: number;
  totalPrice: number;
}

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

    activeItemsSet: (state, action: PayloadAction<activeItems>) => {
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
      } else {
        state.items = state.items.filter((item) => item.id != action.payload);
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
  (items: activeItems) => (dispatch: AppDispatch) => {
    dispatch(activeItemsSet(items));
  };
export const addCartItem = (item: CartItem) => (dispatch: AppDispatch) => {
  dispatch(cartItemAdded(item));
};
export const removeCartItem = (id: number) => (dispatch: AppDispatch) => {
  console.log(id);
  dispatch(cartItemRemoved(id));
};
export const clearCart = () => (dispatch: AppDispatch) => {
  dispatch(cartCleared());
};
export const decreaseCartItem = (id: number) => (dispatch: AppDispatch) => {
  dispatch(cartItemDecreased(id));
};

//selectors
export const getCartItems = () => (state: RootState) => state.cart.items;

export const getActiveType = () => (state: RootState) => state.cart.activeType;
export const getActiveSize = () => (state: RootState) => state.cart.activeSize;

export const getTotalPrice = () => (state: RootState) => state.cart.totalPrice;
export const getTotalCount = () => (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.count, 0);

export const getCartItemByTitle = (title: string) =>
  createSelector([(state: RootState) => state.cart.items], (cartItems) => {
    return cartItems.filter((obj) => obj.title === title);
  });
export default cartReducer;
