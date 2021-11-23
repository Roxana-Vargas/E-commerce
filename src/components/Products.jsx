import React, { useEffect, useState } from 'react'
import Navigation from './NavBar'
import Product from './Product'
import axios from 'axios'


const Products = () => {
    
    const username = localStorage.getItem('username');

    const [allProducts, setAllProducts] = useState([]);

    const [products, setProducts] = useState([]);

    const getAllProducts = () => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            setAllProducts(response.data);
            setProducts(response.data);
            console.log(response.data);
        })
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const filterProductsByCategory = (category) => {
        const filteredProducts = allProducts.filter((product) => product.category === `${category}`);
        setProducts(filteredProducts)
      };

    return (
        <div>
            <Navigation />
            <div>
                <h3>Hello {username}</h3>
                <p>Lets gets somethings?</p>
            </div>
            <div>
                <button onClick={() => {filterProductsByCategory('electronics')}} className='btn btn-primary'>Electronics</button>
                <button onClick={() => {filterProductsByCategory('jewelery')}} className='btn btn-primary'>Jewelery</button>
                <button onClick={() => {filterProductsByCategory("men's clothing")}} className='btn btn-primary'>men's clothing</button>
                <button onClick={() => {filterProductsByCategory("women's clothing")}} className='btn btn-primary'>women's clothing</button>
            </div>
            <Product allProducts={products} />
        </div>
    )
}

export default Products
