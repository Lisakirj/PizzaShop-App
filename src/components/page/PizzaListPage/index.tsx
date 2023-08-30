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
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="pizza_list">
        <div className="container">
          <div className="row">
            <div className="col fs-3 fw-bold mt-3 mt-sm-0">
              <span>Всі піци</span>
            </div>
          </div>
          <div className="row  justify-content-sm-between justify-content-md-around justify-content-lg-start">
            {isLoading
              ? [...new Array(8)].map((_, i) => <SkeletonPizza key={i} />)
              : items.map((item) => <PizzaItem pizza={item} key={item.id} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PizzaListPage;
