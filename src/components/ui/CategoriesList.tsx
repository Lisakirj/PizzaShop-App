import { FC, useState } from "react";
import categories from "../../mockData/categories.json";

const CategoriesList: FC = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="categories">
      <ul>
        {categories.map((el) => (
          <li
            key={el.id}
            className={activeItem === el.id ? "active" : ""}
            onClick={() => setActiveItem(el.id)}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CategoriesList;
