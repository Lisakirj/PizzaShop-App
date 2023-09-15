import { cartItem } from "../../types/cartItem";

export const calcTotalPrice = (items: cartItem[]) => {
  return items.reduce((total, item) => total + item.price * item.count, 0);
};
