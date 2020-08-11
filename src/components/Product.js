import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ title, price, quantity }) =>
    <div>
        <p>{title}</p>
        <p><span> &#36;{price}</span>
            <span>{quantity ? `x ${quantity}` : null}</span>
        </p>
    </div>

Product.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string,
}

export default Product;