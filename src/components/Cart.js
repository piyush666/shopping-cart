import React from 'react';
import Product from './Product';

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
export default Cart;