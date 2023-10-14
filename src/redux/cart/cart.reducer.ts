import { CartActions, toggleCartHidden, addItem, removeItem, reduceQuantity } from "./cart.actions";
import { CartItem } from "./cart.types"
import { addItemInCartWithQuantity, removeItemFromCart, reduceQuantityFromCart } from "./cart.utils";


export type CartState = {
    hidden: boolean;
    cartItems: CartItem[]
}

const INTIAL_STATE: CartState = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state= INTIAL_STATE, action: CartActions) : CartState => { 
    
    if(toggleCartHidden.match(action)){
        return {
            ...state,
            hidden: !state.hidden
        }
    }
    else if(addItem.match(action)){    
        return{
            ...state,
            cartItems : addItemInCartWithQuantity(state.cartItems, action.payload)
        }

    }
    else if(removeItem.match(action)){
        return{
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
        }
    }
    else if (reduceQuantity.match(action)){
        return{
            ...state,
            cartItems: reduceQuantityFromCart(state.cartItems, action.payload)
        }

    }
    else{
        return state;
    }
}

export default cartReducer;