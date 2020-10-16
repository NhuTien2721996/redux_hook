import {combineReducers} from "redux";
import products from "./products";
import ProductEditing from "./ProductEditing";
import uiReducer from "./ui";
const appReducer=combineReducers({
   products,
   ProductEditing,
   uiReducer,
});

export default appReducer;
