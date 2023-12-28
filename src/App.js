import React, { useEffect, useState } from 'react'
import { addToCart, removeCart, DeleteAllCarts } from './redux/actions/cartactions'
import { useDispatch, useSelector } from 'react-redux'
import { GetProducts } from "./redux/actions/ProductsAction"
import Header from "./Components/Header/Header"
import Card from "./Components/Card/Card"
import Drawer from "./Components/Drawer/Drawer"
import { searchItem } from "./redux/actions/ProductsAction"
import { useGetPokemonByNameQuery  , useUpdatePostMutation} from './RTKQuery/apiSlice'
import { setProducts } from "./redux/actions/ProductsAction"
import "./App.css"


const App = () => {
  const [products, setProducts] = useState()
  const [open, setOpen] = useState()
  const [searchValue, setSearchValue] = useState()
  const [productsData, setProductsData] = useState()
  const cartData = useSelector((state) => state.reducer.cartData)
  const productsItem = useSelector((state) => state.ProductData)
  const dispatch = useDispatch()
  console.log("cartData--->", cartData)

  const { data, error, isLoading } = useGetPokemonByNameQuery("products")
  const { dat, err, isLoad } = useUpdatePostMutation({title : "usama khan"})
  console.log(dat)
  useEffect(() => {
    setProductsData(data)
  }, [data])

 
  useEffect(() => {
    dispatch(GetProducts())
  }, [])
  useEffect(() => {
    setProducts(data)
  }, [data])


  useEffect(() => {
    setProducts(productsItem)
  }, [productsItem])


  const AddToCart = (item) => {
    console.log("add to cart function called")
    dispatch(addToCart(item))
  }
  const RemoveFromCart = (data) => {
    dispatch(removeCart(data))
  }
  const DeleteCarts = () => {
    dispatch(DeleteAllCarts())
  }

  const SearchItem = () => {
    console.log(searchValue)
    dispatch(searchItem(searchValue))
  }
  console.log("products---->", products)

  return (
    <>
      <Drawer DeleteCarts={DeleteCarts} RemoveFromCart={RemoveFromCart} AddToCart={AddToCart} cartData={cartData} open={open} setOpen={setOpen} />
      <Header setOpen={setOpen} />
      <div className='inputContainer'>
        <input onChange={(e) => setSearchValue(e.target.value)} type='search' />
        <button onClick={SearchItem} className='searchBtn'>Search</button>
      </div>
      <div className='cardContainer'>
        {console.log(products)}
        {products && products.length > 0 && products.map((product, index) => (
          <Card key={index} AddToCart={AddToCart} product={product ? product : ""} />
        ))}
      </div>

    </>
  )
}

export default App
// import { useGetPokemonByNameQuery } from './RTKQuery/apiSlice'
// import React from 'react'


// const App = () => {
//   const   {data, error , isLoading} = useGetPokemonByNameQuery("products")
//   console.log("data pokemon----->" , data)
//   console.log("data pokemon----->" , error)
//   return (
//     <div>App</div>
//   )
// }

// export default App