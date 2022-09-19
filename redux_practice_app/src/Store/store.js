import CounterReducer from "./counterReducer";
import { createStore } from "redux";

const Store = new createStore(CounterReducer);

export default Store;