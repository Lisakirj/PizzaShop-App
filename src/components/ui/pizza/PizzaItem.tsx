import { FC, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";

import { IPizzaItem } from "../../../store/slices/pizzas/types";
import { CartItem } from "../../../store/slices/cart/types";

import { PizzaOptions } from ".";

import {
  getActiveType,
  getActiveSize,
  getCartItemByTitle,
} from "../../../store/slices/cart/selectors";
import { addCartItem } from "../../../store/slices/cart/slice";

const PizzaItem: FC<{ pizza: IPizzaItem }> = ({ pizza }) => {
  const dispatch = useAppDispatch();
  const activeType = useAppSelector(getActiveType());
  const activeSize = useAppSelector(getActiveSize());

  const cartItems = useAppSelector(getCartItemByTitle(pizza.title));
  const addedCount = useMemo(() => {
    return cartItems ? cartItems.reduce((acc, item) => acc + item.count, 0) : 0;
  }, [cartItems]);

  const handleAdd = (item: IPizzaItem) => {
    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: item.price,
      type: activeType,
      size: activeSize,
      count: 1,
    };
    // console.log(cartItem);
    dispatch(addCartItem(cartItem));
  };
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
            <button className="w-50 " onClick={() => handleAdd(pizza)}>
              {" "}
              <svg
                className="me-2"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="#eb5a1e"
                />
              </svg>
              додати
              {addedCount > 0 && <span className="ms-1">{addedCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
