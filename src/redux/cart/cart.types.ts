import { CategoryItem } from "../shop/shop-types";

export enum CartActionTypes {
    TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    REDUCE_QUANTITY = 'REDUCE_QUANTITY'
}


export type CartItem = CategoryItem & {quantity:number};

export default CartActionTypes;