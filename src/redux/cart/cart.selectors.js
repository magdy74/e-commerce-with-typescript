import { createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItems
)

export const selectHiddenDropDownCart = createSelector(
    selectCart,
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((accumulator, cartItem) => 
    accumulator + cartItem.quantity, 0)
)

export const selectCartItemsTotalPrice = createSelector(
    selectCartItems,
    (cartItems) => cartItems.reduce((accumulator, cartItem) => 
    accumulator + cartItem.quantity * cartItem.price, 0)
)