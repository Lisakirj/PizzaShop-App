import { configureStore, combineReducers } from "@reduxjs/toolkit";

import filterReducer from "./slices/filterSlice";
import pizzasReducer from "./slices/pizzasSlice";
import cartReducer from "./slices/cartSlice";
import paginationReducer from "./slices/paginationSlice";

const rootReducer = combineReducers({
  filter: filterReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
  pagination: paginationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
