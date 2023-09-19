import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SerializedError } from "@reduxjs/toolkit";

import httpService from "../../services/http.service";

import { IPizzaItem } from "../../types/pizzaItem";

enum Status {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

interface IPizzaState {
  entities: IPizzaItem[];
  status: Status;
  errors: SerializedError | null;
}

const initialState: IPizzaState = {
  entities: [],
  status: Status.IDLE,
  errors: null,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.entities = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.entities = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.entities = [];
        state.errors = {
          message: action.error.message,
        };
      });
  },
});

const { reducer: pizzasReducer } = pizzasSlice;

//fetch
type FetchParams = {
  activeItem: number;
  selectOpt: string;
  sortBy: string;
  searchVal: string;
};

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (params: FetchParams) => {
    const { activeItem, selectOpt, sortBy, searchVal } = params;
    const { data } = await httpService.get(
      `items?${
        activeItem > 0 ? `category=${activeItem}` : ""
      }&sortBy=${selectOpt}&order=${sortBy}&search=${searchVal}`
    );

    return data as IPizzaItem[];
  }
);

//selectors
export const getPizzas = () => (state: RootState) => state.pizzas.entities;
export const getStatus = () => (state: RootState) => state.pizzas.status;
export const getError = () => (state: RootState) => state.pizzas.errors;

export default pizzasReducer;
