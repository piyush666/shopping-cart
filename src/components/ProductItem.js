import React from 'react';
import Product from './Product';


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

export default ProductItem;