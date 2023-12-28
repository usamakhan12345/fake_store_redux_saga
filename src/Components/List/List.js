import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styles from "./style.module.css"
import { CiCirclePlus  , CiCircleMinus } from "react-icons/ci";
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {addToCart} from "../../redux/actions/cartactions"

export default function FolderList({cartData , AddToCart , RemoveFromCart}) { 
    console.log(cartData)
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {cartData.length && [...new Set(cartData)].map((v,i)=>(
      <ListItem  alignItems="flex-start">
      <img style={{height :  '100px' , width : '100px'}}  src={v.image} />
      <ListItemText
              style={{ marginLeft : '20px'}}
      
        primary={v.category}
      
        secondary={
          <React.Fragment>
            <Typography
              style={{ marginLeft : '20px' , color : '#000'}}
            >
              Rs : {v.price}
            </Typography>
            <Typography style={{color : '#000' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}> 
                 Qty : <CiCirclePlus  onClick={()=> AddToCart(v)}  style={{cursor : 'pointer' , fontSize : '22px' , marginRight : '10px'}}/>  {cartData.length ? cartData.filter((item)=> item.id === v.id ).length : 0 }  <CiCircleMinus onClick={()=>RemoveFromCart(v)}  style={{cursor : 'pointer' , fontSize : '22px' , marginLeft : '10px'}}/>
            </Typography> 
          </React.Fragment>
        }
      />
      </ListItem>
      
    ) 
    
    
    ) }
    
    </List>
  );
}