import React, { useEffect, useState } from 'react'
import { addToCart, removeCart, DeleteAllCarts } from './redux/actions/cartactions'
import { useDispatch, useSelector } from 'react-redux'
import Header from "./Components/Header/Header"
import Card from "./Components/Card/Card"
import Drawer from "./Components/Drawer/Drawer"
import { searchItem } from "./redux/actions/ProductsAction"
import { useGetPokemonByNameQuery  , useUpdatePostMutation , useDeletePostMutation} from './RTKQuery/apiSlice'
import "./App.css"


const App = () => {
  const [products, setProducts] = useState()
  const [open, setOpen] = useState()
  const [searchValue, setSearchValue] = useState()
  const [productsData, setProductsData] = useState()
  const cartData = useSelector((state) => state.reducer.cartData)
  const dispatch = useDispatch()

  const { data, error, isLoading } = useGetPokemonByNameQuery("products")
  const [updatePost]  = useUpdatePostMutation()
  const [deletePost] = useDeletePostMutation()




  useEffect(() => {
    setProducts(data)
  }, [data , isLoading , dispatch])


  


  const AddToCart = (item) => {
    dispatch(addToCart(item))
  }
  const RemoveFromCart = (data) => {
    dispatch(removeCart(data))
  }
  const DeleteCarts = () => {
    dispatch(DeleteAllCarts())
  }

  const SearchItem = () => {
    dispatch(searchItem(searchValue))
  }

const DeleteCart = async(id)=>{
  const {data , error } =   await deletePost({id })
  if(data){

    alert( `this item ${data.title} has been deleted successfuly`)
  }
  
}
  const UpdateProduct = async()=>{
    const {data,error} =   await updatePost({id : '7' , data : {title : "USmaa khan"} })
    console.log("data--->",data)
    console.log("error--->",error)
  }

  return (
    <>
      <Drawer DeleteCarts={DeleteCarts} RemoveFromCart={RemoveFromCart} AddToCart={AddToCart} cartData={cartData} open={open} setOpen={setOpen} />
      <Header setOpen={setOpen} />
      <button style={{marginTop : 100 }} onClick={UpdateProduct}> update product </button>
      <div className='inputContainer'>
        <input onChange={(e) => setSearchValue(e.target.value)} type='search' />
        <button onClick={SearchItem} className='searchBtn'>Search</button>
      </div>
      <div className='cardContainer'>
        {products && products.length > 0 && products.map((product, index) => (
          <Card key={index} AddToCart={AddToCart} DeleteCart={DeleteCart} product={product ? product : ""} />
        ))}
      </div>

    </>
  )
}

export default App
