import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCart.module.css'

const HeaderCart = (props) => {
  return (
    <button className={classes.button} onClick={props.onOpen}>
        <span className={classes.icon}><CartIcon/></span>
        <span>My cart</span>
    </button>
  )
}

export default HeaderCart