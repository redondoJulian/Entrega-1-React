import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavBar.css'

const CartWidget = () => {
  return (
    <div className='carrito flex-conteiner'>
    <ShoppingCartIcon/>
    <span>0</span>
</div>
  )
}

export default CartWidget