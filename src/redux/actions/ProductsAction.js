import {GET_PRODUCTS , SET_PRODUCTS , SEARCH_ITEM} from "../constants"


export const GetProducts = (data)=>{
    
    return{
        type : GET_PRODUCTS,
        data
    }
}

export const setProducts =(data)=>{
    console.log("set product action called")
    return {
        type : SET_PRODUCTS ,
        data
    }
}


export const searchItem = (data)=>{
    console.log("search item action called")
    return {
        type : SEARCH_ITEM,
        data
    }
    
}