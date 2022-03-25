import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [card,setCard] = useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const addtocardProduct = (product)=>{
        console.log(product)
        const newProduct = [...card,product]
        setCard(newProduct)
    }
    return (

        <div className='shop-container'>
            <div className='products-container'>
              {
                    products.map(product=><Product key={product.id}
                        product={product}
                        addtocardProduct = {addtocardProduct}
                    ></Product>)
              }

            </div>
            <div className='card-container'>
                <h4>Order Summary</h4>
                <h2>Product Count: {card.length}</h2>
            </div>
        </div>
    );
};

export default Shop;