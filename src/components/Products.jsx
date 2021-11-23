import React, { useEffect } from 'react'
import Navigation from './NavBar'
import Product from './Product'


const Products = () => {
    
    const username = localStorage.getItem('username')

    return (
        <div>
            <Navigation />
            <div>
                <h3>Hello {username}</h3>
                <p>Lets gets somethings?</p>
            </div>
            <Product />
        </div>
    )
}

export default Products
