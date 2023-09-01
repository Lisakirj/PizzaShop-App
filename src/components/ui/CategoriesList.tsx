import { FC } from "react";
import categories from "../../mockData/categories.json";

interface ICategoriesList {
  activeItem: number;
  onChange: (id: number) => void;
}

const CategoriesList: FC<ICategoriesList> = ({ activeItem, onChange }) => {
  return (
    <div className="col-12 col-lg-8 col-7 text-start">
      <nav className="nav nav-pills my-4">
        {categories.map((el) => (
          <a
            key={el.id}
            className={`text-sm-center nav-link ${
              activeItem === el.id ? "active" : ""
            }`}
            onClick={() => onChange(el.id)}>
            {el.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
export default CategoriesList;
