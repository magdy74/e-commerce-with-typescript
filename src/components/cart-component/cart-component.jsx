import React from "react";
import './cart-component.css';
const Cart = ({name, imageUrl, price}) =>{
    return(
        <div className='cart'>
            <div className='imgAndAddToCart' style={{backgroundImage:`url(${imageUrl})`}}>
                <div className="addToCart">
                    <span className="buttonText">Add to cart</span>
                </div>
            </div>
            <div className="nameAndPrice">
                <span>{name}</span>
                <span>{price + '$'}</span>
            </div>
        </div>
    )
}

export default Cart;