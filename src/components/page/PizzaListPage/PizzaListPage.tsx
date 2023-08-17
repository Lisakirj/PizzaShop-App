import { FC } from "react";
import PizzaItem from "../../ui/pizza/PizzaItem";
import pizzas from "../../../mockData/pizzas.json";

const PizzaListPage: FC = () => {
  return (
    <>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {pizzas.map((pizza) => (
          <PizzaItem pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </>
  );
};

export default PizzaListPage;
