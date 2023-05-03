import React from "react";
import Shop_Data from "./shop_Data";
import PreviewCollection from "../previewCollection/previewCollection.component";

class ShopData extends React.Component{
    constructor(){
        super();
        this.state = {
            collections: Shop_Data
        }
    }
    
    render(){
        const {collections} = this.state
        return(
        <div>
            {
                collections.map(({title, items, id})=>(
                    <PreviewCollection key={id} title= {title} items= {items}/>
                ))
                
            }
        </div>
        )
    }
}

export default ShopData;