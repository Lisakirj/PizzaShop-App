import { FC, useState } from "react";

interface IPizzaOptions {
  types: string[];
  sizes: number[];
}

const PizzaOptions: FC<IPizzaOptions> = ({ types, sizes }) => {
  const [activeType, setActiveType] = useState("тонке");
  const [activeSize, setActiveSize] = useState(0);
  // console.log(types, sizes);
  return (
    <div className="pizza_block__selector row justify-between  p-2">
      <div className="row mb-2 g-0">
        <ul className="d-flex align-items-center justify-center my-0">
          {types.map((opt, i) => (
            <li
              key={i}
              className={activeType === opt ? "active" : ""}
              onClick={() => setActiveType(opt)}>
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
