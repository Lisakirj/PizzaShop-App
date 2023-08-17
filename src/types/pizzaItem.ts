export interface IPizzaItem {
  pizza: {
    id: number;
    imageUrl: string;
    title: string;
    types: string[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
  };
}
