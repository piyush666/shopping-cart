import React from 'react';
import { getCartProducts, getTotal } from '../selectors';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { checkOut } from '../actions';

const CartContainer = ({ products, total, checkOut }) =>
    <div>
        <Cart
            products={products}
            total={total}
            onCheckOutClicked={() => checkOut(products)} />
    </div>

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    { checkOut }
)(CartContainer);