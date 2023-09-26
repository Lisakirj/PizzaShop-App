import { FC, useRef, useState, useCallback } from "react";
import React from "react";
import { debounce } from "lodash";

import { useAppDispatch } from "../../store/hooks/hooks";
import { setSearchVal } from "../../store/slices/filter/slice";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const [inputVal, setInputVal] = useState<string>("");
  const [onFocus, setOnFocus] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setSearchValDebounced = useCallback(
    debounce((val) => {
      dispatch(setSearchVal(val));
    }, 250),
    [dispatch]
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputVal(event.target.value);
    setSearchValDebounced(event.target.value);
    setOnFocus(false);
  };
  const handleClick: React.MouseEventHandler<SVGSVGElement> = () => {
    dispatch(setSearchVal(""));
    setInputVal("");
    setOnFocus(true);
    inputRef.current?.focus();
  };
  return (
    <>
      <div className="search-bar d-flex align-items-center justify-content-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="grey"
          className=" me-2"
          viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <div className="d-flex align-items-center rounded-pill">
          <input
            value={inputVal}
            ref={inputRef}
            onChange={handleChange}
            className="w-100  border-0"
            placeholder="Пошук піци.."
          />
          <svg
            onClick={handleClick}
            className={onFocus ? "hidden" : ""}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Search;
