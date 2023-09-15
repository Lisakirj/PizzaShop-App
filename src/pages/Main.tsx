import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { ParsedQs } from "qs";

import CategoriesList from "../components/ui/CategoriesList";
import Sort from "../components/ui/Sort";
import PizzaList from "../components/page/PizzaListPage/PizzaList.tsx";
import Pagination from "../components/common/Pagination";

import config from "../config.json";
// import httpService from "../../../services/http.service";
import { paginate } from "../utils/helpers/paginate.ts";

import { useAppDispatch, useAppSelector } from "../store/hooks/hooks.ts";
import {
  loadPizzas,
  getPizzas,
  getError,
} from "../store/slices/pizzasSlice.ts";

import {
  getSelectOpt,
  getSortBy,
  getActiveItem,
  getSearchVal,
  setFilterParams,
  // getOptions,
} from "../store/slices/filterSlice.ts";

import {
  getCurrentPage,
  getPageSize,
} from "../store/slices/paginationSlice.ts";

axios.defaults.baseURL = config.apiEndPoint; //"https://64e1055b50713530432ce695.mockapi.io/items"// `items?category=${activeItem}`
// backend pagination: `/blogs?page=1&limit=10` --> https://64e1055b50713530432ce695.mockapi.io/items?page=${currentPage}&limit=${pageSize}

const Main: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const items = useAppSelector(getPizzas());
  const error = useAppSelector(getError());

  const activeItem = useAppSelector(getActiveItem());
  const selectOpt = useAppSelector(getSelectOpt());
  const sortBy = useAppSelector(getSortBy());
  const searchVal = useAppSelector(getSearchVal());

  const currentPage = useAppSelector(getCurrentPage());
  const pageSize = useAppSelector(getPageSize());

  const isMounted = useRef(false);
  const isURLSearch = useRef(false);

  //first render & url-params don't exist(isURLSearch - false) - request default
  useEffect(() => {
    if (!isURLSearch.current) {
      dispatch(loadPizzas(activeItem, selectOpt.sortProp, sortBy, searchVal));
    }
    isURLSearch.current = false;
  }, [dispatch, activeItem, selectOpt, sortBy, searchVal, currentPage]);

  //url-link: first render & url-params exist & filter deps have changed
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        activeItem,
        sortProp: selectOpt.sortProp,
        sortBy,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [navigate, activeItem, selectOpt, sortBy, currentPage]);

  //first render & url-params exist - save params in store
  useEffect(() => {
    if (window.location.search) {
      const params: ParsedQs = qs.parse(window.location.search.substring(1));
      dispatch(setFilterParams(params));
      isURLSearch.current = true;
    }
  }, [dispatch]);

  const itemsCrop = paginate(items, currentPage, pageSize);
  return (
    <>
      <section className="menu">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <CategoriesList />
            <Sort />
          </div>
        </div>
      </section>
      {error ? (
        <h2 className="text-center p-5">{error}</h2>
      ) : (
        <>
          <PizzaList items={itemsCrop} />
          {items.length !== 0 ? <Pagination /> : ""}
        </>
      )}
    </>
  );
};

export default Main;
