import React from "react";
import './header.css'
import crownLogo from './4.3 crown.svg.svg'
import cartLogo from './icons8-shopping-cart-30.png'
import { useNavigate } from "react-router";
const Header = () => {
    const navigate = useNavigate()
    return(
    <div className="header">
        <div className="rightPart">
            <img className="imgCrown"  alt= "img" src={crownLogo}/>
        </div>
        <div className="leftPart">
            <span onClick={()=> navigate('/collection')}>shop</span>
            <span onClick={()=> navigate('/contacts')}>contact</span>
            <span onClick={()=> navigate('/signin')}>sign in</span>
            <img 
                className="imgCart" 
                alt= "img" 
                src={cartLogo}
                onClick={()=> navigate('/cart')}
                />
        </div>
    </div>
    )
}

export default Header;