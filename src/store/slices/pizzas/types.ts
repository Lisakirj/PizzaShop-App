import { SerializedError } from "@reduxjs/toolkit";

export interface IPizzaItem {
  id: number;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export interface IPizzaState {
  entities: IPizzaItem[];
  status: Status;
  errors: SerializedError | null;
}
