import shop from '../api/shop';
import * as type from '../constants/actionTypes';

const receiveProducts = products => ({
    type: type.RECEIVE_PRODUCTS,
    products
})

//thunk
export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}

const addToCartUnsafe = productId => ({
    type: type.ADD_TO_CART,
    productId
})

//thunk
export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}

//thunk
export const checkOut = products => (dispatch, getState) => {
    const { cart } = getState();
    dispatch({
        type: type.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
        dispatch({
            type: type.CHECKOUT_SUCCESS,
            cart
        })

    })
}