import { FC } from "react";
import { IPizzaItem } from "../../../types/pizzaItem";
import PizzaOptions from "./PizzaOptions";
import AddButton from "../../common/addButton";

const PizzaItem: FC<IPizzaItem> = ({ pizza }) => {
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{pizza.title}</h4>
      <PizzaOptions types={pizza.types} sizes={pizza.sizes} />
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{pizza.price} грн</div>
        <AddButton />
      </div>
    </div>
  );
};

export default PizzaItem;
