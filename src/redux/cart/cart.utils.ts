import { CartItem } from "./cart.types"
import { CategoryItem } from "../shop/shop-types"

export const addItemInCartWithQuantity = (cartItems: CartItem[], ItemAddToCart: CategoryItem): CartItem[] => {
    const existingItem = cartItems.find((cartItem) => 
        cartItem.id === ItemAddToCart.id
    )

    if(existingItem){
        return cartItems.map(cartItem => 
            cartItem.id === ItemAddToCart.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            )
    }
    else{
        return [...cartItems, {...ItemAddToCart, quantity: 1}]
    }
}


export const removeItemFromCart = (cartItems: CartItem[], ItemRemove: CartItem): CartItem[] => {
    return cartItems.filter((item)=> item !== ItemRemove)

}

export const reduceQuantityFromCart = (cartItems: CartItem[], ItemReduceQuantity: CartItem) : CartItem[] =>{
    const existingItem = cartItems.find((cartItem) => 
        cartItem.id === ItemReduceQuantity.id
    )
    if(existingItem && existingItem.quantity === 1){
        return cartItems.filter((item)=> item !== existingItem)
    }
    else{
        return cartItems.map((item)=>
            item === existingItem? 
            {...item, quantity: item.quantity -1 } : item
            )
    }
}