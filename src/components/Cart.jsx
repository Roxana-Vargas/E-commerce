import React from 'react'
import Navigation from './NavBar'
import ProductsCart from './ProductsCart'

const Cart = ({showProducts, productsCart, buyProducts, removeProduct}) => {
    return (
        <div>
            <Navigation />
            <button  onClick={showProducts}>Volver</button>
            <ProductsCart removeProduct={removeProduct} productsCart={productsCart} />
            <button  onClick={buyProducts}>Buy</button>
        </div>
    )
}

export default Cart
