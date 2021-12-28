import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from "accounting";
import { useStateValue } from './StateProvider';
import { actionTypes } from '../reducer';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },


}));

export default function Product({product : {id, name, productType, image, price, rating, description}}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket =() => {
    dispatch ({
      type: actionTypes.ADD_TO_BASKET,
      item:{
      id, name, productType, image, price, rating, description }
    })
  }
  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
            <Typography
            className={classes.action}
            varian='h5'
            color='textSecondary'>
            {accounting.formatMoney(price)}
            </Typography>} 
        title={name}
        subheader="En stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to cart' onClick={addToBasket} >
          <AddShoppingCart fontSize='large' onClick={removeItem}/>
        </IconButton>
        {Array(rating)
        .fill()
        .map((_,i)=>(
         <p>&#11088;</p>))} 
             <IconButton>
         <DeleteIcon fontSize='large' />
         </IconButton>

      </CardActions>
      
    </Card>
  );
}


  
