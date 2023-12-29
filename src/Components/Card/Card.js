import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({product , AddToCart , DeleteCart}) {
  return (
    <Card sx={{ width: 320,marginBottom : 10 }}>
      <CardMedia
        sx={{ height: 140 , width : 140 , objectFit : 'contain' , margin : 'auto' }}
        image={product.image ?? ""}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.title}
         
        </Typography>
      </CardContent>
      <div style={{display : 'flex'}}>

      <CardActions>
        <Button onClick={()=>AddToCart(product)} sx={{color : "blue"}}  size="small">Add to cart</Button>
      </CardActions>
      <CardActions>
        <Button onClick={()=>DeleteCart(product.id)} sx={{color : "blue"}}  size="small">Delete Cart</Button>
      </CardActions>
      </div>
    </Card>
  );
}