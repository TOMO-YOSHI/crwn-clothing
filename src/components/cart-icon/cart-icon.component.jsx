import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector.js';

import { ReactComponent as ShoppingIcon } from '../../images/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => (

    <div className='cart-icon' onClick={() => toggleCartHidden()}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToprops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

// const mapStateToProps = (state) => ({
//     itemCount: selectCartItemsCount(state)
// });

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     itemCount: cartItems.reduce(
//         (total, cartItem) => total + cartItem.quantity, 0
//     )
// });

// const mapStateToProps = (state) => ({
//     cart: state.cart.cartItems
// });

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(CartIcon);