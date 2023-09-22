import { RootState } from "../../store";

export const getPizzas = () => (state: RootState) => state.pizzas.entities;
export const getStatus = () => (state: RootState) => state.pizzas.status;
export const getError = () => (state: RootState) => state.pizzas.errors;
