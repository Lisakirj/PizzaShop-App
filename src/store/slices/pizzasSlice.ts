import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../store";
import axios from "axios";
import { AxiosError } from "axios";

import { IPizzaItem } from "../../types/pizzaItem";

interface IPizzaState {
  entities: IPizzaItem[];
  isLoading: boolean;
  errors: string | null;
}

const initialState: IPizzaState = {
  entities: [],
  isLoading: true,
  errors: null,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    pizzaReceived: (state, action: PayloadAction<IPizzaItem[]>) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    pizzaRequested: (state) => {
      state.isLoading = true;
    },
    pizzaRequestFailed: (state, action: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.errors = action.payload.message;
    },
  },
});

const { actions, reducer: pizzasReducer } = pizzasSlice;
const { pizzaReceived, pizzaRequested, pizzaRequestFailed } = actions;

//fetch
export const loadPizzas =
  (activeItem: number, selectOpt: string, sortBy: string, searchVal: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(pizzaRequested());
    try {
      const { data } = await axios.get(
        `items?${
          activeItem > 0 ? `category=${activeItem}` : ""
        }&sortBy=${selectOpt}&order=${sortBy}&search=${searchVal}`
      );

      dispatch(pizzaReceived(data));
    } catch (error: unknown) {
      dispatch(pizzaRequestFailed(error as AxiosError));
    }
  };
//getters
export const getPizzas = () => (state: RootState) => state.pizzas.entities;
export const getIsLoading = () => (state: RootState) => state.pizzas.isLoading;
export const getError = () => (state: RootState) => state.pizzas.errors;

export default pizzasReducer;
