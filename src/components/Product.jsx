import React from 'react'

const Product = ({allProducts, showCart, addProduct}) => {

    
    return (
        <div>
            {
                allProducts.map((item) => {
                    return (
                        <div key={item.id} className="card" style={{width: '18rem'}}>
                            <img src={item.image} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p>{item.price}</p>
                                <button onClick={() => {addProduct(item.id); showCart()}} className='btn btn-primary'>Buy</button>
                            </div>
                        </div>)
                })
            }  
        </div>
    )
}

export default Product
