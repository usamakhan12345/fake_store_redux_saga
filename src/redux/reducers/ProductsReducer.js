import { GET_PRODUCTS , SET_PRODUCTS , SEARCH_ITEM } from "../constants";



export const ProductData = (data = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            console.log("product data reducer --->")
            return [action.data]
        case SET_PRODUCTS:
            console.log("action.data---->",action.data)
            return [...action.data]
        case SEARCH_ITEM :
            console.log(action.data)
            console.log(data[0])
            // const searchedItems = data && data.filter((v,i)=> v.category.includes(action.data))
            // console.log(searchedItems)
            return [data]
        default:
            return data
    }


}