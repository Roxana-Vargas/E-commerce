import React from 'react'

const Product = ({allProducts}) => {
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
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Description
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    {item.description}
                                    </div>
                                </div>
                                <button className='btn btn-primary'>Buy</button>
                            </div>
                        </div>)
                    })
                }  
        </div>
    )
}

export default Product
