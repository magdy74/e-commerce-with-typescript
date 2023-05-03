import React from "react";
import { useNavigate } from "react-router";
import './previewCollection.styles.css'
import Cart from "../cart-component/cart-component";
const PreviewCollection = ({title, items}) => {
    const navigate = useNavigate()
    return(
        <div>
            <h2 className="categoriebutton" onClick={()=>navigate(`/${title}`)}>{title}</h2>
            <div className='collection' >
            {items.filter((item, index) => index < 4).map(({name,id, imageUrl, price})=> (
                <Cart key={id} name={name} imageUrl={imageUrl} price={price}/>
            ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;