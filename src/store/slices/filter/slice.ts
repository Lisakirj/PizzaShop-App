import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch } from "../../store";

import { ParsedQs } from "qs";

import { IFilterState, FilterOption } from "./types";

const initialState: IFilterState = {
  sortOptions: [
    { id: 1, name: "популярністю", sortProp: "rating" },
    { id: 2, name: "ціною", sortProp: "price" },
    { id: 3, name: "алфавітом", sortProp: "title" },
  ],
  categories: [
    { id: 0, name: "Всі" },
    { id: 1, name: "М'ясна" },
    { id: 2, name: "Вегетаріанська" },
    { id: 3, name: "Гриль" },
    { id: 4, name: "Гостра" },
    { id: 5, name: "Закрита" },
  ],
  selectOpt: {
    id: 1,
    name: "популярністю",
    sortProp: "rating",
  },
  sortBy: "asc",
  activeItem: 0,
  searchVal: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    activeItemSet: (state, action: PayloadAction<number>) => {
      state.activeItem = action.payload;
    },
    selectOptSet: (state, action: PayloadAction<FilterOption>) => {
      state.selectOpt = action.payload;
    },
    sortBySet: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    searchValSet: (state, action: PayloadAction<string>) => {
      state.searchVal = action.payload;
    },
    filterParamsSet: (state, action: PayloadAction<ParsedQs>) => {
      state.activeItem = Number(action.payload.activeItem);

      if (typeof action.payload.sortBy === "string") {
        state.sortBy = action.payload.sortBy;
      }

      const selectOpt = state.sortOptions.find(
        (opt) => opt.sortProp === action.payload.sortProp
      );
      if (selectOpt) {
        state.selectOpt = selectOpt;
      }
    },
  },
});

const { actions, reducer: filterReducer } = filterSlice;
const {
  activeItemSet,
  selectOptSet,
  sortBySet,
  searchValSet,
  filterParamsSet,
} = actions;

export const setActiveItem = (item: number) => (dispatch: AppDispatch) => {
  // console.log(item);
  dispatch(activeItemSet(item));
};
export const setSelectOpt = (opt: FilterOption) => (dispatch: AppDispatch) => {
  dispatch(selectOptSet(opt));
};
export const setSortBy = (str: string) => (dispatch: AppDispatch) => {
  dispatch(sortBySet(str));
};
export const setSearchVal = (str: string) => (dispatch: AppDispatch) => {
  dispatch(searchValSet(str));
};
export const setFilterParams =
  (params: ParsedQs) => (dispatch: AppDispatch) => {
    dispatch(filterParamsSet(params));
  };

export default filterReducer;
