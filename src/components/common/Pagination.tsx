import { FC } from "react";
import * as _ from "lodash";

import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import {
  getCurrentPage,
  getPageSize,
  setCurrentPage,
} from "../../store/slices/paginationSlice";
import { getPizzas } from "../../store/slices/pizzasSlice";
// backend pagination: `/blogs?page=1&limit=10` --> https://64e1055b50713530432ce695.mockapi.io/items?page=${currentPage}&limit=${pageSize}

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(getCurrentPage());
  const pageSize = useAppSelector(getPageSize());
  const itemsCount = useAppSelector(getPizzas())?.length;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const handleBack = (currentPage: number) => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };
  const handleNext = (currentPage: number) => {
    if (currentPage < pages.length) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <section className="pagination">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2 py-3 ">
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link "
                    href="#"
                    aria-label="Previous"
                    onClick={() => handleBack(currentPage)}>
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {pages.map((page) => {
                  return (
                    <li
                      key={page}
                      className={
                        "page-item" + (page === currentPage ? " active" : "")
                      }>
                      <a
                        href="#"
                        className="page-link"
                        onClick={() => dispatch(setCurrentPage(page))}>
                        {page}
                      </a>
                    </li>
                  );
                })}

                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Next"
                    onClick={() => handleNext(currentPage)}>
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
