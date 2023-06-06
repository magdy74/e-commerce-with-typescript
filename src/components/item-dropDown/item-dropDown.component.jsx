import React from "react";
import './item-dropDown.style.css';

const ItemDropDown = ({imageUrl,name, price, quantity}) => {
 return(
    <div className="dropDownItem">
        <img alt= 'img' src={imageUrl} className='dropDownImg'/>
        <div className="dropDownNamePrice">
            <span>{name}</span>
            <span>{`${quantity} x ${price}$`}</span>
        </div>
    </div>
 )    
}



export default ItemDropDown;