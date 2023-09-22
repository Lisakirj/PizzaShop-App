export type FilterOption = {
  id: number;
  name: string;
  sortProp: string;
};

export type FilterCategory = {
  id: number;
  name: string;
};

export interface IFilterState {
  sortOptions: FilterOption[];
  categories: FilterCategory[];
  selectOpt: FilterOption;
  sortBy: string;
  activeItem: number;
  searchVal: string;
}
