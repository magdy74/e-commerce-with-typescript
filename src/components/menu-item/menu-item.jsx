import React from "react";
import { useNavigate } from "react-router";
import './menu-item.css'

const MenuItem = ({title, id, img, linkUrl}) => {

const navigate = useNavigate()    
return(
    <div 
    className= {`menu-item item${id}`}  
    style={{backgroundImage: `url(${img})`}}
    onClick={() => navigate(linkUrl)}
    >
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)}

export default MenuItem;