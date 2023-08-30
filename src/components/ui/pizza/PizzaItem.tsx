import { FC } from "react";

import { IPizzaItem } from "../../../types/pizzaItem";
import PizzaOptions from "./PizzaOptions";
import AddButton from "../../common/AddButton";

const PizzaItem: FC<{ pizza: IPizzaItem }> = ({ pizza }) => {
  return (
    <div className="pizza_block col-sm-5 col-lg-4 col-xl-3 ">
      <div className="card mb-0 mt-3 my-sm-4 border-0">
        <img src={pizza.imageUrl} className=" mx-2 w-90" alt="pizza" />
        <div className="card-body">
          <p className="card-text text-center">{pizza.title}</p>
          <PizzaOptions types={pizza.types} sizes={pizza.sizes} />
          <div className="row justify-between p-2 mt-sm-2 mt-md-3 align-items-center text-sm-center">
            <span className="w-50 my-2 mb-sm-2 mb-md-0 text-center">
              від {pizza.price} грн
            </span>
            <AddButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
