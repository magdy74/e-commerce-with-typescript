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