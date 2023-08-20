import { FC, useEffect, useState } from "react";
import axios from "axios";
import PizzaItem from "../../ui/pizza/PizzaItem";
import { IPizzaItem } from "../../../types/pizzaItem";

const PizzaListPage: FC = () => {
  const [items, setItems] = useState<IPizzaItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://64e1055b50713530432ce695.mockapi.io/items`
        );
        console.log(data);
        setItems(data as IPizzaItem[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {items.map((item) => (
          <PizzaItem pizza={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default PizzaListPage;
