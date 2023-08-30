import { FC, useState } from "react";
import categories from "../../mockData/categories.json";

const CategoriesList: FC = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="col-12 col-lg-8 col-7 text-start">
      <nav className="nav nav-pills my-4">
        {categories.map((el) => (
          <a
            key={el.id}
            className={`text-sm-center nav-link ${
              activeItem === el.id ? "active" : ""
            }`}
            onClick={() => setActiveItem(el.id)}>
            {el.name}
          </a>
        ))}
      </nav>
    </div>

    //     <a
    //       className=" text-sm-center nav-link active "
    //       aria-current="page"
    //       href="#">
    //       Всі
    //     </a>
    //
  );
};
export default CategoriesList;
