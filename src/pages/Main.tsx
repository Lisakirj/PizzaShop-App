import { FC, useState, useEffect } from "react";
import axios from "axios";

import CategoriesList from "../components/ui/CategoriesList";
import Sort from "../components/ui/Sort";
import PizzaListPage from "../components/page/PizzaListPage";

import { IPizzaItem } from "../types/pizzaItem";
import config from "../config.json";
import { Option } from "../types/option";
// import httpService from "../../../services/http.service";

axios.defaults.baseURL = config.apiEndPoint; //"https://64e1055b50713530432ce695.mockapi.io/items?sortBy=category=2"
// `items?category=${activeItem}`

const Main: FC = () => {
  const [items, setItems] = useState<IPizzaItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [activeItem, setActiveItem] = useState(0);

  const [selectOpt, setSelectOpt] = useState<Option>({
    id: 1,
    name: "популярністю",
    sortProp: "rating",
  });
  const [sortBy, setSortBy] = useState<string>("asc");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `items?${activeItem > 0 ? `category=${activeItem}` : ""}&sortBy=${
            selectOpt.sortProp
          }&order=${sortBy}`
        );
        setItems(data as IPizzaItem[]);
        // console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [activeItem, selectOpt, sortBy]);

  return (
    <>
      <section className="menu">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <CategoriesList activeItem={activeItem} onChange={setActiveItem} />
            <Sort
              selectOpt={selectOpt}
              setSelectOptFunction={setSelectOpt}
              sortBy={sortBy}
              setSortByFunction={setSortBy}
            />
          </div>
        </div>
      </section>
      <PizzaListPage items={items} isLoading={isLoading} />
    </>
  );
};

export default Main;
