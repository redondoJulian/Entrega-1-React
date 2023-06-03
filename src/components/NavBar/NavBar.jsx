import './NavBar.css'

import React from 'react'
import CartWidget from './CartWidget.jsx'

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
                <CartWidget/>
            </header>
        )
    }
}

export default Header;