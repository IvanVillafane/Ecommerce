import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Badge, Grow } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../component/StateProvider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:"7rem",
  },
  appBar:{
      backgroundColor:"whitesmoske",
      boxShadow:"none",
  },
  grow:{
      flexGrow:1,},

  Button:{
      marginLeft: theme.spacing(2),
  },

  Image:{
      height:"1rem",
      
  },


  
}));

export default function NavBarnuevo() {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();


  return (
    <div className={classes.root}>
      <NavBarnuevo/>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
{/* <img src={logo}className={classes.image}/>  */}
     </IconButton>
          </Link>
     <div className={classes.glow}/>
          <Typography variant="h6" color='textPrimary' component="p">
            Hola usuario
          </Typography>
<div className={classes.button}> 
<Button variant="outlined">
<strong>Entrar</strong></Button>
<Link to="checkout-page">  
<IconButton arial-label="show cart items" color="inherit">
    <Badge badgeContent={basket?.length} color="secondary">
<ShoppingCart fontSize="large" color="white"/></Badge>
</IconButton>
</Link>
</div>     
  </Toolbar>
      </AppBar>
    </div>
  );
}
