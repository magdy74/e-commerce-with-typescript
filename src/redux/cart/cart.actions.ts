import CartActionTypes from "./cart.types";
import { Action, ActionWithPayload, createAction } from "../../utilis/reducer/reducer.utilis";
import { CartItem } from "./cart.types";
import { CategoryItem } from "../shop/shop-types";
import { withMatcher } from "../../utilis/reducer/reducer.utilis";


type ToggleCartHidden = Action<CartActionTypes.TOGGLE_CART_HIDDEN>

type AddItem = ActionWithPayload<CartActionTypes.ADD_ITEM, CategoryItem>

type RemoveItem = ActionWithPayload<CartActionTypes.REMOVE_ITEM, CartItem>

type ReduceQuantity = ActionWithPayload<CartActionTypes.REDUCE_QUANTITY, CartItem>

export type CartActions = ToggleCartHidden | AddItem | RemoveItem | ReduceQuantity

export const toggleCartHidden = withMatcher(():ToggleCartHidden => createAction(CartActionTypes.TOGGLE_CART_HIDDEN))

export const addItem = withMatcher((item: CategoryItem): AddItem => createAction(CartActionTypes.ADD_ITEM, item))

export const removeItem = withMatcher((item: CartItem): RemoveItem => createAction(CartActionTypes.REMOVE_ITEM, item))

export const reduceQuantity = withMatcher((item: CartItem): ReduceQuantity => createAction(CartActionTypes.REDUCE_QUANTITY, item))