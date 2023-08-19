import React from "react";

import { FC, useState } from "react";
type Option = {
  id: number;
  name: string;
};
const options: Option[] = [
  { id: 1, name: "популярності" },
  { id: 2, name: "ціні" },
  { id: 3, name: "алфавіту" },
];
const Sort: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectOpt, setSelectOpt] = useState<string>("популярності");
  const [sortBy, setSortBy] = useState<string>("asc");

  const handleClick = (opt: string) => {
    setSelectOpt(opt);
    setIsOpen(false);
  };
  const toggleClass = () =>
    sortBy === "asc" ? setSortBy("desc") : setSortBy("asc");

  const handleSort = () => {
    toggleClass();
  };

  return (
    <div className="sort">
      <div className="sort__label" onClick={handleSort}>
        <svg
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
        <b>Сортувати по:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{selectOpt}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {options.map((opt) => (
              <li
                className={selectOpt === opt.name ? "active" : ""}
                key={opt.id}
                onClick={() => handleClick(opt.name)}>
                {opt.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
