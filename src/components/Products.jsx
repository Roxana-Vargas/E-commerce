import React, { useEffect, useState } from 'react'
import Navigation from './NavBar'
import Product from './Product'
import axios from 'axios'
import Cart from './Cart'
import Carousel from './Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMemory, faGem, faFemale, faMale } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './products.css'


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
        const removedProduct = productsCart.filter((product) => product.id === id);
        settotal(total - removedProduct[0].price)
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
        .then(settotal(0))
        .then(setViewCart(false))
        toast.success('🦄 Successful purchase!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            });
    }

    const [total, settotal] = useState(0)
    
    const addTotal = (price) => {
        settotal(total + price);
        console.log(total);
    }

    return (
        <div>
            {!viewCart && 
                <div>
                    <Navigation />
                    <div className='textWelcome'>
                        <h4 className='m-3'>Hello {username} 🙂</h4>
                        <p className='text m-3'>Lets gets somethings?</p>
                    </div>
                    <Carousel />
                    <div className='divAllProducts m-3'>
                        <p className='textCategories'>Top categories</p>
                        <button  className='btn btnSeeAll' onClick={() => setProducts(allProducts)}>See All</button>
                    </div>
                    <div className='btnsCategory m-3 d-flex justify-content-around'>
                        <button onClick={() => {filterProductsByCategory('electronics')}} className='btn btn-category'><FontAwesomeIcon className='icon' icon={faMemory} /></button>
                        <button onClick={() => {filterProductsByCategory('jewelery')}} className='btn btn-category'><FontAwesomeIcon className='icon' icon={faGem} /></button>
                        <button onClick={() => {filterProductsByCategory("men's clothing")}} className='btn btn-category'><FontAwesomeIcon className='icon' icon={faMale} /></button>
                        <button onClick={() => {filterProductsByCategory("women's clothing")}} className='btn btn-category'><FontAwesomeIcon className='icon' icon={faFemale} /></button>
                    </div>
                    <Product  addTotal={addTotal} addProduct={addProduct} allProducts={products} showCart={showCart} />
                </div>}
            {viewCart&& 
            <Cart total={total} removeProduct={removeProduct} productsCart={productsCart} showProducts={showProducts} buyProducts={buyProduct} />}
            <ToastContainer />
        </div>
    )
}

export default Products
