import React from "react";
import './header.css'
import crownLogo from './4.3 crown.svg.svg'
import cartLogo from './icons8-shopping-cart-30.png'
const Header = () => (
<div className="header">
    <div className="rightPart">
        <img className="img1"  alt= "img" src={crownLogo}/>
    </div>
    <div className="leftPart">
        <span>shop</span>
        <span>contact</span>
        <span>sign in</span>
        <img className="img2" alt= "img" src={cartLogo}/>
    </div>
</div>
)

export default Header;