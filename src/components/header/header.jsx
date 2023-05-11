import React from "react";
import './header.css'
import crownLogo from './4.3 crown.svg.svg'
import cartLogo from './icons8-shopping-cart-30.png'
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
const Header = ({currentUser}) => {
    const navigate = useNavigate()
    return(
    <div className="header">
        <div className="rightPart">
            <img className="imgCrown"  alt= "img" src={crownLogo} onClick={()=>navigate('/')}/>
        </div>
        <div className="leftPart">
            <span className= "spanHeader" onClick={()=> navigate('/shop')}>shop</span>
            <span className= "spanHeader" onClick={()=> navigate('/contacts')}>contact</span>
            {currentUser ? 
            <span className= "spanHeader" onClick={()=> signOut(auth)}>sign Out</span>

            : 
            <span className= "spanHeader" onClick={()=> navigate('/signin')}>sign in</span>     
            }
            <img className="imgCart" alt= "img" src={cartLogo} onClick={()=> navigate('/cart')}/>
        </div>
    </div>
    )
}

export default Header;