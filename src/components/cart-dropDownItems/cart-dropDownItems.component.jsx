import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropDownItems.style.css';
import { connect } from "react-redux";
import ItemDropDown from "../item-dropDown/item-dropDown.component"; 

const DropDownCart = ({cartItems}) =>{
   return(
    <div className="drop-down-cart">
        <div className="drop-down-cart-list">
            {
            cartItems.map(({imageUrl,name, price, quantity}) => (
             <ItemDropDown imageUrl={imageUrl} name={name} price={price} quantity={quantity}/>
            ) )
            
            }
        </div>
        <div className="drop-down-button">
            <CustomButton isCheckOut={true}>GO TO CHECK OUT</CustomButton>
        </div>
    </div>
   ) 
} 

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(DropDownCart);