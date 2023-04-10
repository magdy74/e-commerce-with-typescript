import React from "react";
import './menu-item.css'

const MenuItem = ({title, id, img}) => (
    <div className= {`menu-item item${id}`} Style={`background-image: url(${img})`}>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;