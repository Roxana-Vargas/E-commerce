import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './cart.css'

const ProductsCart = ({productsCart, removeProduct}) => {
    return (
        <div className='containerCart'>
            {
                productsCart.map((item) => (
                    <div key={item.id} style={{width:'350px'}} className='m-3 d-flex flex-row card row'>
                        <div className='col-3' style={{maxWidth:'540px'}} >
                            <div className='containerImageCart' >
                                <img className='imageCart' src={item.image} alt="" />
                            </div>
                        </div>
                        <div className='infoCart col-9'>
                            <p className='nameCart'>{item.title}</p>
                            <div >
                                <div className='d-flex justify-content-between'>
                                    <p className='priceCart'>${item.price}</p>
                                    <button className='btn btnRemove' onClick={() => removeProduct(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>   
            ))}
        </div>
    )
}

export default ProductsCart
