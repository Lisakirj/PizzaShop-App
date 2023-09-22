import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

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
