import React, { useEffect, useState } from 'react'
import Navigation from './NavBar'
import Product from './Product'
import axios from 'axios'
import Cart from './Cart'


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

    const [viewCart, setViewCart] = useState(false)

    const showCart = () => {
        setViewCart(true)
    }

    const showProducts = () => {
        setViewCart(false)
    }

    const [productsCart, setProductsCart] = useState([]);

    const [productToOrder, setProductToOrder] = useState([])

    const addProduct = (id) => {
        const product = allProducts.filter((product) => product.id === id);
        setProductsCart([...productsCart, ...product])
        setProductToOrder ([
            ...productToOrder,
            {
                productId: id,
                quantity: 1
            }
        ])
    }

    const removeProduct = (id) => {
        const newProductsToCart = productsCart.filter((product) => product.id !== id)
        setProductsCart(newProductsToCart);
        const newProductsToOrder = productToOrder.filter((product) => product.productId !== id);
        setProductToOrder(newProductsToOrder)
    }

    const buyProduct = () => {
        setProductsCart([]);
        axios.post('https://fakestoreapi.com/carts',{
                    userId:1,
                    date: 2020-2-5,
                    products: productToOrder
                }
        )
        .then(res=>console.log(res))
        .then(setProductToOrder([]))
    }

    return (
        <div>
            {!viewCart && 
                <div>
                    <Navigation />
                    <div>
                        <h3>Hello {username}</h3>
                        <p>Lets gets somethings?</p>
                    </div>
                    <button onClick={() => setProducts(allProducts)}>See All</button>
                    <div>
                        <button onClick={() => {filterProductsByCategory('electronics')}} className='btn btn-primary'>Electronics</button>
                        <button onClick={() => {filterProductsByCategory('jewelery')}} className='btn btn-primary'>Jewelery</button>
                        <button onClick={() => {filterProductsByCategory("men's clothing")}} className='btn btn-primary'>men's clothing</button>
                        <button onClick={() => {filterProductsByCategory("women's clothing")}} className='btn btn-primary'>women's clothing</button>
                    </div>
                    <Product addProduct={addProduct} allProducts={products} showCart={showCart} />
                </div>}
            {viewCart&& 
            <Cart removeProduct={removeProduct} productsCart={productsCart} showProducts={showProducts} buyProducts={buyProduct} />}
        </div>
    )
}

export default Products
