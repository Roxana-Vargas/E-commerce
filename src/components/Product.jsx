import React from 'react'

const Product = () => {
    return (
    <div className="card" style={{width: '18rem'}}>
        <img src={'https://media.istockphoto.com/photos/wall-clock-isolated-on-white-ten-past-ten-picture-id597276512?k=20&m=597276512&s=612x612&w=0&h=n2Wds5-xqleapCIVWnuLO9H-fQltLBllf1rRI2ZjKbI='} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#j" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
}

export default Product
