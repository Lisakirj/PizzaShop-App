import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks.ts";

import qs from "qs";
import { ParsedQs } from "qs";

import { CategoriesList, Sort, PizzaList, Pagination } from "../components";

import { paginate } from "../utils/helpers/paginate.ts";

import { getPizzas, getError } from "../store/slices/pizzas/selectors.ts";
import { fetchPizzas } from "../store/slices/pizzas/slice.ts";
import {
  getSelectOpt,
  getSortBy,
  getActiveItem,
  getSearchVal,
} from "../store/slices/filter/selectors.ts";
import { setFilterParams } from "../store/slices/filter/slice.ts";

import {
  getCurrentPage,
  getPageSize,
} from "../store/slices/pagination/selectors.ts";

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
      dispatch(
        fetchPizzas({
          activeItem,
          selectOpt: selectOpt.sortProp,
          sortBy,
          searchVal,
        })
      );
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
        <div className="text-center p-5">
          <h2>На жаль, не вдалося завантажити піци 🥺</h2>
          <h4>Спробуйте, будь ласка, пізніше 🙏🏻</h4>
        </div>
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
