import { createSelector} from "reselect";
import { RootReducer } from "../store";
import { CartState } from "./cart.reducer";

const selectCart = (state: RootReducer): CartState => state.cart;

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