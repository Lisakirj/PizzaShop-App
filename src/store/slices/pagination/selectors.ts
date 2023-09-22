import { RootState } from "../../store";

export const getCurrentPage = () => (state: RootState) =>
  state.pagination.currentPage;
export const getPageSize = () => (state: RootState) =>
  state.pagination.pageSize;
