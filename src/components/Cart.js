import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

const Cart = ({ products, total, onCheckOutClicked }) => {
    const hasProducts = products.length;
    const nodes = hasProducts > 0 ?
        (
            products.map(product =>
                <Product
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                />
            )
        ) : (
            <p>please add some products to the cart.</p>
        )
    return (
        <div>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
            <button
                onClick={onCheckOutClicked}
                disabled={hasProducts ? '' : 'disabled'}>
                CheckOut
                </button>
        </div>
    )
}

Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.string,
    onCheckOutClicked: PropTypes.func,
}

export default Cart;