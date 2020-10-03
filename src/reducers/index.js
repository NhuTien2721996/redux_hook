import {combineReducers} from "redux";
import products from "./products";
import ProductEditing from "./ProductEditing";
const appReducer=combineReducers({
   products,
   ProductEditing
});

export default appReducer;
