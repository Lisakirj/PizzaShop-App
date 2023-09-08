import _ from "lodash";

import { IPizzaItem } from "../../types/pizzaItem";

export function paginate(
  items: IPizzaItem[],
  pageNumber: number,
  pageSize: number
) {
  const startIndex = (pageNumber - 1) * pageSize; //0,4,8
  return _(items).slice(startIndex).take(pageSize).value();
}
