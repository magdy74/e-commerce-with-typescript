import React from "react";
import './checkOutPage.style.css';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsTotalPrice } from "../../redux/cart/cart.selectors";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";
import CheckOutContanier from "../../components/checkout-contanier/checkout-contanier.component";
const CheckOutPage = ({totalPrice, cartItems}) => {

    return(
        <div className="checkout-page">
            <CheckoutHeader/>
            <CheckOutContanier/>
            <div className="checkout-total">
                <span>TOTAL : {totalPrice + '$'}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    totalPrice:selectCartItemsTotalPrice
    
})

export default connect(mapStateToProps)(CheckOutPage);