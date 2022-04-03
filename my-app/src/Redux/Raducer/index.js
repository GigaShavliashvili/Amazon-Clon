import { combineReducers } from "redux";
import { RegisterR } from "./RegisterR";
import { ProductR } from "./ProductR";
export const reducerRoot = combineReducers({
  register: RegisterR,
  product: ProductR,
});
