import React from 'react'
import Navigation from './NavBar'
import ProductsCart from './ProductsCart'

const Cart = ({showProducts, productsCart, buyProducts}) => {
    return (
        <div>
            <Navigation />
            <button  onClick={showProducts}>Volver</button>
            <ProductsCart productsCart={productsCart} />
            <button  onClick={buyProducts}>Buy</button>
        </div>
    )
}

export default Cart
