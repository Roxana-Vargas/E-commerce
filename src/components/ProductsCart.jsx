import React from 'react'

const ProductsCart = ({productsCart}) => {
    return (
        <div>
            {
                productsCart.map((item) => (
                    <div key={item.id} className='card'>
                        <div style={{maxWidth:'540px'}} className='row'>
                            <div style={{maxWidth:'80px'}} className='col'>
                                <img style={{width:'80px'}}  src={item.image} alt="" />
                            </div>
                            <div className='col'>
                                <p>Nombre</p>
                                <div className='row'>
                                    <div className='col'>
                                        <p>Precio</p>
                                    </div>
                                    <div className='col'>
                                        <button>Menos</button><p>Cantidad</p><button>Más</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default ProductsCart
