import { FC } from "react";

import PizzaItem from "../../ui/pizza/PizzaItem";
import SkeletonPizza from "../../ui/pizza/SkeletonPizza";
import { IPizzaItem } from "../../../types/pizzaItem";
import Search from "../../ui/Search";
import { useAppSelector } from "../../../store/hooks/hooks";
import { getIsLoading } from "../../../store/slices/pizzasSlice";
interface IPizzaListPage {
  items: IPizzaItem[];
}

const PizzaList: FC<IPizzaListPage> = ({ items }) => {
  // const dispatch = useAppDispatch();
  // const items = useAppSelector(getPizzas());
  const isLoading = useAppSelector(getIsLoading());
  return (
    <>
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
            {isLoading
              ? [...new Array(8)].map((_, i) => <SkeletonPizza key={i} />)
              : items.map((item) => <PizzaItem pizza={item} key={item.id} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PizzaList;
