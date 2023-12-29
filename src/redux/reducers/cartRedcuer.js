import { ADD_TO_CART, REMOVE_CART, DELETE_ALL_CARTS , SEARCH_ITEM } from "../constants"



export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer add to cart called")
            return [action.data, ...data]
        case REMOVE_CART:
            data.splice(data.findIndex((v,i)=> v.id ===action.data.id),1)
            // console.log(filteredData)
            return [...data]
        case DELETE_ALL_CARTS : 
                console.log("delete all cart called")
                return []
        case SEARCH_ITEM :
            console.log("searchItem called")

        default:
            return data
    }
}