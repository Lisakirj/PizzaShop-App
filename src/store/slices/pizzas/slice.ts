import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import httpService from "../../../services/http.service";

import { IPizzaItem, Status, IPizzaState } from "./types";

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

export default pizzasReducer;
