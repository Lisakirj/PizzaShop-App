import { CartItem } from "../../types/cartItem";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((total, item) => total + item.price * item.count, 0);
};
