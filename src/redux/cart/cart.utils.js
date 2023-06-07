export const addItemInCartWithQuantity = (cartItems, ItemAddToCart) => {
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


export const removeItemFromCart = (cartItems, ItemRemove) => {
    return cartItems.filter((item)=> item !== ItemRemove)

}

export const reduceQuantity = (cartItems, ItemReduceQuantity) =>{
    const existingItem = cartItems.find((cartItem) => 
        cartItem.id === ItemReduceQuantity.id
    )
    if(existingItem.quantity === 1){
        return cartItems.filter((item)=> item !== existingItem)
    }
    else{
        return cartItems.map((item)=>
            item === existingItem? 
            {...item, quantity: item.quantity -1 } : item
            )
    }
}