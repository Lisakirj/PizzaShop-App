import { FC } from "react";

import PizzaItem from "../../ui/pizza/PizzaItem";
import SkeletonPizza from "../../ui/pizza/SkeletonPizza";
import { IPizzaItem } from "../../../types/pizzaItem";

interface IPizzaListPage {
  items: IPizzaItem[];
  isLoading: boolean;
}

const PizzaListPage: FC<IPizzaListPage> = ({ items, isLoading }) => {
  return (
    <>
      <section className="pizza_list">
        <div className="container">
          <div className="row">
            <div className="col fs-3 fw-bold mt-3 mt-sm-0">
              <span>Всі піци</span>
            </div>
          </div>
          <div className="row  justify-content-sm-between justify-content-md-around justify-content-lg-start">
            {isLoading
              ? [...new Array(8)].map((_, i) => <SkeletonPizza key={i} />)
              : items.map((item) => <PizzaItem pizza={item} key={item.id} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PizzaListPage;
