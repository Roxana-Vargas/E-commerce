import React, { useEffect, useState } from 'react'
import Navigation from './NavBar'
import Product from './Product'
import axios from 'axios'


const Products = () => {
    
    const username = localStorage.getItem('username');

    const [allProducts, setAllProducts] = useState([]);

    const getAllProducts = () => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            setAllProducts(response.data);
            console.log(response.data);
        })
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div>
            <Navigation />
            <div>
                <h3>Hello {username}</h3>
                <p>Lets gets somethings?</p>
            </div>
            <Product allProducts={allProducts} />
        </div>
    )
}

export default Products
