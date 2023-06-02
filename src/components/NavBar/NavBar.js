import './NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <header className='flex-conteiner'>
                <div className='logo flex-conteiner'>
                    <h1>Julishop</h1>
                </div>
                <ul className='flex-conteiner'>
                    <li><a href="./none">Inicio</a></li>
                    <li><a href="./none">Productos</a></li>
                    <li><a href="./none">Contacto</a></li>
                    <li><a href="https://www.coderhouse.com/" rel="noreferrer" target='_blank' className='coder'>Coderhouse</a></li>
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