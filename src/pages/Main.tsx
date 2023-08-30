import { FC } from "react";

import CategoriesList from "../components/ui/CategoriesList";
import Sort from "../components/ui/Sort";
import PizzaListPage from "../components/page/PizzaListPage";

const Main: FC = () => {
  return (
    <>
      <section className="menu">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <CategoriesList />
            <Sort />
          </div>
        </div>
      </section>
      <PizzaListPage />
    </>
  );
};

export default Main;
