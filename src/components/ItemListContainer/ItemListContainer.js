import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div>
        <p className='main'>¡Hola! {props.greeting}</p>
    </div>
  )
}

export default ItemListContainer