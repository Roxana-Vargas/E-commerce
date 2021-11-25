import React from 'react'
import Navigation from './NavBar'
import ProductsCart from './ProductsCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './cart.css'

const Cart = ({showProducts, productsCart, buyProducts, removeProduct, addTotal, total}) => {
    return (
        <div>
            <Navigation />
            <div className='d-flex justify-content-between'>
              <button className='btn btn-back'  onClick={showProducts}><FontAwesomeIcon icon={faArrowLeft} /></button>
              <h3 className='btn textMyCart'>My Cart</h3> 
            </div>
            
            <ProductsCart addTotal={addTotal}  removeProduct={removeProduct} productsCart={productsCart} />
            <div className='containerTotal d-flex justify-content-between m-4'>
                <h3>Total</h3>
                <h4 className='priceCart'>{total}</h4>
            </div>
            <button className='btn btnBuy'  onClick={buyProducts}>Buy Now</button>
        </div>
    )
}

export default Cart
