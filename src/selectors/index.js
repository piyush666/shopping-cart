// selctors from ProductsContainer
export const getProduct = (state, id) =>
    state.byId[id]

export const getVisibleProducts = state =>
    state.visibleIds.map(id => getProduct(state, id))


// cart selectors
export const getQuantity = (state, productId) =>
    state.quantityById[productId] || 0

export const getAddedIds = state =>
    state.addedIds

export const getTotal = state =>
    getAddedIds(state.cart)
        .reduce((total, id) =>
            total + getProduct(state.products, id).price * getQuantity(state.cart, id),
            0
        ).toFixed(2)

export const getCartProducts = state =>
    getAddedIds(state.cart).map(id => ({
        ...getProduct(state.products, id),
        quantity: getQuantity(state.cart, id)
    }))