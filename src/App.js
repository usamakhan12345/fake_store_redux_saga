import React, { useEffect, useState } from 'react'
  import { addToCart, removeCart  , DeleteAllCarts  } from './redux/actions/cartactions'
import { useDispatch, useSelector } from 'react-redux'
import { GetProducts } from "./redux/actions/ProductsAction"
import Header from "./Components/Header/Header"
import Card from "./Components/Card/Card"
import Drawer from "./Components/Drawer/Drawer"
import {searchItem} from "./redux/actions/ProductsAction"
import "./App.css"


const App = () => {
  const [products, setProducts] = useState()
  const [open, setOpen] = useState()
  const[searchValue, setSearchValue] = useState()
  const cartData = useSelector((state) => state.cartData)
  const productsItem = useSelector((state) => state.ProductData)
  const dispatch = useDispatch()
  console.log("productsItem--->", productsItem)
  console.log(products)




  useEffect(() => {
    dispatch(GetProducts())
  }, [])

  useEffect(() => {
    setProducts(productsItem)
  }, [productsItem])


const AddToCart = (item)=>{
  dispatch(addToCart(item))
}
const RemoveFromCart = (data)=>{
  dispatch(removeCart(data))
}
const DeleteCarts = ()=>{
  dispatch(DeleteAllCarts())
}

const SearchItem = ()=>{
  console.log(searchValue)
  dispatch(searchItem(searchValue))
}
console.log("products---->", products)

  return (
    <>
      <Drawer DeleteCarts={DeleteCarts} RemoveFromCart={RemoveFromCart} AddToCart={AddToCart} cartData={cartData} open={open} setOpen={setOpen} />
      <Header setOpen={setOpen} />
      <div className='inputContainer'>
        <input onChange={(e)=> setSearchValue(e.target.value)} type='search'/>
        <button onClick={SearchItem} className='searchBtn'>Search</button>
      </div>
       <div className='cardContainer'>
        {console.log(products)}
        {products && products.length > 0 && products.map((product, index) => (
            <Card key={index} AddToCart={AddToCart} product={product ? product : "" } />
          ))}
      </div>

    </>
  )
}

export default App