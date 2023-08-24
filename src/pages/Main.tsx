import { FC } from "react";

import CategoriesList from "../components/ui/CategoriesList";
import Sort from "../components/ui/Sort";
import PizzaListPage from "../components/page/PizzaListPage";

const Main: FC = () => {
  return (
    <>
      {" "}
      <div className="content__top">
        <CategoriesList />
        <Sort />
      </div>
      <PizzaListPage />
    </>
  );
};

export default Main;
