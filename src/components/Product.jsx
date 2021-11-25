import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = ({allProducts, showCart, addProduct, addTotal}) => {

    
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
            {
                allProducts.map((item) => {
                    return (
                        <div key={item.id} className="card m-3 col-12" style={{width: '18rem'}}>
                            <div className='containerProduct'>
                                <img className='imageProduct' src={item.image} alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className='textPrice'>${item.price}</p>
                            </div>
                            <button onClick={() => {addProduct(item.id); showCart(); addTotal(item.price)}} className='btn btn-buy'><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                        </div>)
                })
            }
            </div> 
        </div>
    )
}

export default Product
