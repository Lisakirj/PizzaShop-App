import { FC, useState } from "react";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";

import { FilterOption } from "../../types/filterOption";

import {
  getOptions,
  getSelectOpt,
  getSortBy,
  setSelectOpt,
  setSortBy,
} from "../../store/slices/filterSlice";

const Sort: FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const options = useAppSelector(getOptions());
  const selectOpt = useAppSelector(getSelectOpt());
  const sortBy = useAppSelector(getSortBy());

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (opt: FilterOption) => {
    dispatch(setSelectOpt(opt));
    setIsOpen(false);
  };

  const toggleClass = () =>
    sortBy === "asc" ? dispatch(setSortBy("desc")) : dispatch(setSortBy("asc"));

  const handleSort: React.MouseEventHandler<SVGSVGElement> = () => {
    toggleClass();
  };

  return (
    <div className="col-12 col-lg-4 col-3 text-end ">
      <div className="btn-group justify-center align-items-center sort">
        <svg
          onClick={handleSort}
          className={sortBy}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <span className="mx-2 fw-bold ">Сортувати за:</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className=""
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false">
          {selectOpt.name}
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-end my-3 ">
          {options.map((opt) => {
            return (
              <li key={opt.id} onClick={() => handleClick(opt)}>
                <button
                  className={`dropdown-item ${
                    selectOpt.name === opt.name ? "active" : ""
                  }`}
                  type="button">
                  {opt.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default Sort;
