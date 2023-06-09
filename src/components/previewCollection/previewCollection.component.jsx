import React from "react";
import { useNavigate } from "react-router";
import './previewCollection.styles.css'
import Cart from "../cart-component/cart-component";
const PreviewCollection = ({title,routeName, items}) => {
    const navigate = useNavigate()
    return(
        <div>
            <h2 className="categoriebutton" onClick={()=>navigate(`${routeName}`)}>{title}</h2>
            <div className='collection' >
            {items.filter((item, index) => index < 4).map((item)=> (
                <Cart key={item.id} item={item}/>
            ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;