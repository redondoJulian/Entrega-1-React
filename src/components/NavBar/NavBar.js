import './NavBar.css'
import img from './logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <header className='flex-conteiner'>
                <div className='logo flex-conteiner'>
                    {/* <img src={img} alt="logo"></img> */}
                    <h1>Julishop</h1>
                </div>
                <ul className='flex-conteiner'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="https://www.coderhouse.com/" target='_blank' className='coder'>Coderhouse</a></li>
                </ul>
                <div className='carrito flex-conteiner'>
                    <ShoppingCartIcon/>
                    <span>0</span>
                </div>
            </header>
        )
    }
}

export default Header;