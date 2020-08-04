import React from 'react';

const Product = ({ title, price, quantity }) =>
    <div>
        <p>{title}</p>
        <p><span> &#36;{price}</span>
            <span>{quantity ? `x ${quantity}` : null}</span>
        </p>
    </div>

export default Product;