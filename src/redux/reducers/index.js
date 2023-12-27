import { combineReducers } from "redux";
import { cartData } from "./cartRedcuer";
import {ProductData} from "./ProductsReducer"

export default combineReducers({ 
    cartData,
    ProductData
 })