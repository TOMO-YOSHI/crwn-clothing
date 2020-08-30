import { createSelector } from 'reselect';
import { createUserProfileDocument } from '../../firebase/firebase.utils';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
    // cart is "state.cart", and the name of "cart" could have been named whatever we wanted.
);

export const selectCartItemsCount = createSelector([selectCartItems],
    cartItems =>
        cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);