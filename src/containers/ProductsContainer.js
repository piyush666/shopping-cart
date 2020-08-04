import React from 'react';
import ProductsList from '../components/ProductsList';
import ProductItem from '../components/ProductItem';
import { connect } from 'react-redux';
import { getVisibleProducts } from '../selectors';
import { addToCart } from '../actions';

const ProductsContainer = ({ products, addToCart }) => (
    <ProductsList title='Products'>
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
                onAddtoCartClicked={() => addToCart(product.id)}
            />)}
    </ProductsList>
)

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer); 