import React from "react";
import './shopping-cart.component.css';
import cartLogo from './shopping-cart-svgrepo-com.svg'
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const ShoppingCart = ({toggleCartHidden, countCartItems}) => {
    return(
        <div className="shopping-cart">
            <img className="imgCart" alt= "img" src={cartLogo} onClick={toggleCartHidden} />
            {countCartItems ? <label className='ItemsNumberInCart'>{countCartItems}</label> : null}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    countCartItems: selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);