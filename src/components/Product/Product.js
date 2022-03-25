import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
   
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
           <button className='btn-card' onClick={()=>props.addtocardProduct(props.product)}> 
               <p className='btn-text'>Add to Card</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;