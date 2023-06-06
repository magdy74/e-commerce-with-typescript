import React from "react";
import './cart-component.css';
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const Cart = ({item, addItem}) =>{
    const {name, imageUrl, price} = item;
    return(
        <div className='cart'>
            <div className='imgAndAddToCart' style={{backgroundImage:`url(${imageUrl})`}}>
                <div className="addToCart" onClick={()=> addItem(item)}>
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


const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Cart);