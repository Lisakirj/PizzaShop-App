export interface CartItem {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  size: number;
  type: string;
  count: number;
}

export interface ICartState {
  items: CartItem[];
  activeType: string;
  activeSize: number;
  totalPrice: number;
}

export type ActiveItems = {
  type: string;
  size: number;
};
