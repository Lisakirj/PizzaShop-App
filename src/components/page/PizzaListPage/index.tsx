import { FC, useEffect, useState } from "react";
import axios from "axios";

import PizzaItem from "../../ui/pizza/PizzaItem";
import SkeletonPizza from "../../ui/pizza/SkeletonPizza";
import { IPizzaItem } from "../../../types/pizzaItem";
// import httpService from "../../../services/http.service";
import config from "../../../config.json";

axios.defaults.baseURL = config.apiEndPoint; // // // // // // !!!!!!

const PizzaListPage: FC = () => {
  const [items, setItems] = useState<IPizzaItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`items`);
        setItems(data as IPizzaItem[]);
        setIsLoading(false);
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
        {isLoading
          ? [...new Array(6)].map((_, i) => <SkeletonPizza key={i} />)
          : items.map((item) => <PizzaItem pizza={item} key={item.id} />)}
      </div>
    </>
  );
};

export default PizzaListPage;
