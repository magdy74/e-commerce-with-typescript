import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropDownItems.style.css';
import { connect } from "react-redux";
import ItemDropDown from "../item-dropDown/item-dropDown.component"; 
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const DropDownCart = ({cartItems, toggleCartHidden}) =>{
   const navigate =useNavigate()
   return(
    <div className="drop-down-cart">
        <div className="drop-down-cart-list">
            { cartItems.length ? 
            cartItems.map(({imageUrl,name, price, quantity}) => (
             <ItemDropDown imageUrl={imageUrl} name={name} price={price} quantity={quantity}/>
            ) )
            : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <div className="drop-down-button">
            <CustomButton isCheckOut={true}  onClick={() => {navigate('/checkout'); toggleCartHidden()}}>GO TO CHECK OUT</CustomButton>
        </div>
    </div>
   ) 
} 

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(DropDownCart);