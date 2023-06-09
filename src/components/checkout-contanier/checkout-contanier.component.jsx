import React from "react";
import './checkout-contanier.style.css';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { removeItem, addItem, reduceQuantity } from "../../redux/cart/cart.actions";

const CheckOutContanier = ({cartItems,removeItem, addItem, reduceQuantity}) => {
    return(
        cartItems.map((item)=>{
            const {imageUrl, name, quantity, price, id} = item;
            return(
            <div key={id} className="checkout-item">
                <div  className="checkout-item-detail">
                    <img alt='img' src={`${imageUrl}`}  className='checkout-item-image'/>
                </div>
                <div className="checkout-item-detail">
                    <span>{name}</span>
                </div>
                
                <div className="checkout-item-detail quantity" >
                    <span className="aumentDecreaseQuantity" onClick={()=> reduceQuantity(item)}>&#10094;</span>
                    <span>{quantity}</span>
                    <span className="aumentDecreaseQuantity" onClick={()=> addItem(item)}>&#10095;</span>
                </div>
                <div className="checkout-item-detail">
                    <span>{price}$</span>
                </div>
                <div className="checkout-item-detail">
                    <span className="remove" onClick={()=> removeItem(item)}>&#10005;</span>
                </div>
            </div>
        )})
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
    
})

const mapDispatchToProps = dispatch => ({
    removeItem: (item)=> dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    reduceQuantity: (item) => dispatch(reduceQuantity(item)),
})

export default connect(mapStateToProps,mapDispatchToProps)(CheckOutContanier);