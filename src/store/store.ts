import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import filterReducer from "./slices/filterSlice";
import pizzasReducer from "./slices/pizzasSlice";
import cartReducer from "./slices/cartSlice";
import paginationReducer from "./slices/paginationSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "filter"],
};

const rootReducer = combineReducers({
  filter: filterReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
  pagination: paginationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const configureAppStore = () => {
  const persistor = persistStore(store);
  return { store, persistor };
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default configureAppStore;
