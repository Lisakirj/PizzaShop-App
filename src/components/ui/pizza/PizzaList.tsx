import { FC } from "react";
import { useAppSelector } from "../../../store/hooks/hooks";

import { PizzaItem, SkeletonPizza } from ".";
import { Search } from "../../index";

import { IPizzaItem } from "../../../store/slices/pizzas/types";

import { getStatus } from "../../../store/slices/pizzas/selectors";

interface IPizzaListPage {
  items: IPizzaItem[];
}
const PizzaList: FC<IPizzaListPage> = ({ items }) => {
  const status = useAppSelector(getStatus());

  return (
    <section className="pizza_list">
      <div className="container">
        <div className="row ">
          <div className="col fs-3 fw-bold mt-3 mt-sm-0">
            <span>Всі піци</span>
          </div>
          <div className="col-3 ">
            <Search />
          </div>
        </div>
        <div className="row  justify-content-sm-between justify-content-md-around justify-content-lg-start">
          {status === "loading"
            ? [...new Array(8)].map((_, i) => <SkeletonPizza key={i} />)
            : items.map((item) => <PizzaItem pizza={item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
};

export default PizzaList;
