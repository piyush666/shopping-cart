import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

const ProductItem = ({ product, onAddtoCartClicked }) => (

    <div>
        <Product
            title={product.title}
            price={product.price}
            quantity={product.inventory}
        />
        <button
            onClick={onAddtoCartClicked}
            disabled={product.inventory > 0 ? '' : 'disabled'}
        >
            {product.inventory > 0 ? 'Add to cart' : 'sold out'}
        </button>
    </div>
)

ProductItem.propTypes = {
    propduct: PropTypes.shape({
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }),
    onAddtoCartClicked: PropTypes.func.isRequired
}
export default ProductItem;