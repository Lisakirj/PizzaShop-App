import { RootState } from "../../store";

export const getOptions = () => (state: RootState) => state.filter.sortOptions;
export const getCategories = () => (state: RootState) =>
  state.filter.categories;
export const getSelectOpt = () => (state: RootState) => state.filter.selectOpt;
export const getSortBy = () => (state: RootState) => state.filter.sortBy;
export const getActiveItem = () => (state: RootState) =>
  state.filter.activeItem;
export const getSearchVal = () => (state: RootState) => state.filter.searchVal;
