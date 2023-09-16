import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SerializedError } from "@reduxjs/toolkit";

import axios from "axios";

import { IPizzaItem } from "../../types/pizzaItem";

interface IPizzaState {
  entities: IPizzaItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  errors: SerializedError | null;
}

const initialState: IPizzaState = {
  entities: [],
  status: "idle",
  errors: null,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.entities = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        console.log("fulfilled", action);
        state.status = "succeeded";
        state.entities = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        console.log("rejected", action.error);
        state.status = "failed";
        state.entities = [];
        state.errors = {
          message: action.error.message,
        };
      });
  },
});

const { reducer: pizzasReducer } = pizzasSlice;

//fetch
type params = {
  activeItem: number;
  selectOpt: string;
  sortBy: string;
  searchVal: string;
};

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (params: params) => {
    const { activeItem, selectOpt, sortBy, searchVal } = params;
    const { data } = await axios.get(
      `items?${
        activeItem > 0 ? `category=${activeItem}` : ""
      }&sortBy=${selectOpt}&order=${sortBy}&search=${searchVal}`
    );
    console.log(data);

    return data as IPizzaItem[];
  }
);

//selectors
export const getPizzas = () => (state: RootState) => state.pizzas.entities;
export const getStatus = () => (state: RootState) => state.pizzas.status;
export const getError = () => (state: RootState) => state.pizzas.errors;

export default pizzasReducer;
