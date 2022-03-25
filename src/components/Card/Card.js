import React from 'react';
import'./Card.css'

const Card = ({card}) => {
    console.log(card)
    let total = 0
    let shipping = 0
    for(const product of card){
       total = total + product.price
       shipping = shipping + product.shipping

    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = (total+shipping+tax).toFixed(2)
    return (
        <div className='card'>
            <h4>Order Summary</h4>
            <h2>Product Count: {card.length}</h2>
            <h2>Total Price: ${total}</h2>
            <h4>Total Shipping: ${shipping}</h4>
            <h2>Tax: ${tax}</h2>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Card;