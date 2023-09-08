import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../store";

interface IPaginationState {
  currentPage: number;
  pageSize: number;
}

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

export const getCurrentPage = () => (state: RootState) =>
  state.pagination.currentPage;
export const getPageSize = () => (state: RootState) =>
  state.pagination.pageSize;

export default paginationReducer;
