import React from "react";
import './checkOutPage.style.css';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsTotalPrice } from "../../redux/cart/cart.selectors";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";
import CheckOutContanier from "../../components/checkout-contanier/checkout-contanier.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const CheckOutPage = ({totalPrice, cartItems}) => {

    return(
        <div className="checkout-page">
            <CheckoutHeader/>
            <CheckOutContanier/>
            <div className="checkout-total">
                <span>TOTAL : {totalPrice + '$'}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br/>
                4000 0000 0000 4202 - Exp: 01/24 - CVV: 123
            </div>
            <div className="button"> 
                <StripeCheckoutButton price={totalPrice}/>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    totalPrice:selectCartItemsTotalPrice
    
})

export default connect(mapStateToProps)(CheckOutPage);