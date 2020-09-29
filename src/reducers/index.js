import {combineReducers} from "redux";
import products from "./products";
import productEditing from "./productEditing";
let appReducer=combineReducers({
    products,
    productEditing
});

export default appReducer;
