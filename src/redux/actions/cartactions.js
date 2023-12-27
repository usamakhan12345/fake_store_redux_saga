import {ADD_TO_CART , REMOVE_CART ,DELETE_ALL_CARTS  } from "../constants"


export const addToCart = (data)=>{
    console.log("action called")
    return {
        type : ADD_TO_CART,
        data :  data
    }
}
export const DeleteAllCarts = (data)=>{
    return {
        type: DELETE_ALL_CARTS,
        data
    }
}

export const removeCart = (data)=>{
    console.log("action called")
    return {
        type : REMOVE_CART ,
        data 


    }
}

