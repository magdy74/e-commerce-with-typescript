import React from "react";
import './header.css'
import crownLogo from './4.3 crown.svg.svg'
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import ShoppingCart from "../shopping-cart-component/shopping-cart.component";
import DropDownCart from "../cart-dropDownItems/cart-dropDownItems.component";

const Header = ({currentUser, hiddenDropDownCart}) => {
    const navigate = useNavigate()
    return(
    <div className="header">
        <div className="leftPart">
            <img className="imgCrown"  alt= "img" src={crownLogo} onClick={()=>navigate('/')}/>
        </div>
        <div className="rightPart">
            <span className= "spanHeader" onClick={()=> navigate('/shop')}>shop</span>
            <span className= "spanHeader" onClick={()=> navigate('/contacts')}>contact</span>
            {currentUser ? 
            <span className= "spanHeader" onClick={()=> signOut(auth)}>sign Out</span>
            :
            <span className= "spanHeader" onClick={()=> navigate('/signin')}>sign in</span>     
            }
        </div>
        <ShoppingCart onClick={()=> navigate('/cart')}/>
        {hiddenDropDownCart ? null : <DropDownCart/>}
    </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hiddenDropDownCart: state.cart.hidden
})

export default connect(mapStateToProps)(Header);