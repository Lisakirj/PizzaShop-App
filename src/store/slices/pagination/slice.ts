import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch } from "../../store";
import { IPaginationState } from "./types";

const initialState: IPaginationState = {
  currentPage: 1,
  pageSize: 4,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    currentPageSet: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

const { actions, reducer: paginationReducer } = paginationSlice;
const { currentPageSet } = actions;

export const setCurrentPage = (page: number) => (dispatch: AppDispatch) => {
  dispatch(currentPageSet(page));
};

export default paginationReducer;
