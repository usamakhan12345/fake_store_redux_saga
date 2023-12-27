import { takeEvery , put } from 'redux-saga/effects'
import {GET_PRODUCTS , SET_PRODUCTS , SEARCH_ITEM} from "../constants"
import axios from 'axios'

function* getProductRequest(){
    console.log("APi called ")
    const products = yield axios.get('https://fakestoreapi.com/products')
       const data =  products.data
       console.log("data---->", data)
      yield put({ type: SET_PRODUCTS, data })
}

function* searchItems(){

}

function* getProducts(){
    yield takeEvery(GET_PRODUCTS, getProductRequest)
    yield takeEvery(SEARCH_ITEM, searchItems)

}

export default getProducts