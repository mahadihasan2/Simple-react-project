import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { name,seller, img, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
           <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratting: {ratings} Stars</small></p>
           </div>
           <button className='btn-card'>
               <p>Add to Card</p>
           </button>
        </div>
    );
};

export default Product;