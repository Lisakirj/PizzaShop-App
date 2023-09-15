import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { setActiveItems } from "../../../store/slices/cartSlice";

interface IPizzaOptions {
  types: string[];
  sizes: number[];
}

const PizzaOptions: FC<IPizzaOptions> = ({ types, sizes }) => {
  const dispatch = useAppDispatch();
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  useEffect(() => {
    const type = types[activeType];
    const size = sizes[activeSize];
    dispatch(setActiveItems({ type, size }));
  }, [dispatch, activeSize, activeType, sizes, types]);
  return (
    <div className="pizza_block__selector row justify-between  p-2">
      <div className="row mb-2 g-0">
        <ul className="d-flex align-items-center justify-center my-0">
          {types.map((opt, i) => (
            <li
              key={i}
              className={activeType === i ? "active" : ""}
              onClick={() => setActiveType(i)}>
              {opt}
            </li>
          ))}
        </ul>
      </div>
      <div className="row g-0">
        <ul className="d-flex my-0">
          {sizes.map((opt, i) => (
            <li
              key={opt}
              className={activeSize === i ? "active" : ""}
              onClick={() => setActiveSize(i)}>
              {opt} см
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaOptions;
