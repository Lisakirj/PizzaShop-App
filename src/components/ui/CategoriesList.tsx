import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import React from "react";

import {
  getActiveItem,
  getCategories,
  setActiveItem,
} from "../../store/slices/filterSlice";

const CategoriesList: FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories());
  const activeItem = useAppSelector(getActiveItem());

  return (
    <div className="col-12 col-lg-8 col-7 text-start">
      <nav className="nav nav-pills my-4">
        {categories.map((el) => (
          <a
            key={el.id}
            className={`text-sm-center nav-link ${
              activeItem === el.id ? "active" : ""
            }`}
            onClick={() => dispatch(setActiveItem(el.id))}>
            {el.name}
          </a>
        ))}
      </nav>
    </div>
  );
});
export default CategoriesList;
