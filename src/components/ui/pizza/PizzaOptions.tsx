import { FC, useState } from "react";

interface IPizzaOptions {
  types: string[];
  sizes: number[];
}

const PizzaOptions: FC<IPizzaOptions> = ({ types, sizes }) => {
  const [activeType, setActiveType] = useState("тонке");
  const [activeSize, setActiveSize] = useState(0);
  return (
    <div className="pizza-block__selector">
      <ul>
        {types.map((opt, i) => (
          <li
            key={i}
            className={activeType === opt ? "active" : ""}
            onClick={() => setActiveType(opt)}>
            {opt}
          </li>
        ))}
      </ul>
      <ul>
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
  );
};

export default PizzaOptions;
