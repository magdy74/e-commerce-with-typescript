import React from "react";
import PreviewCollection from '../previewCollection/previewCollection.component'
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop-selectors";
import { createStructuredSelector } from "reselect";

const CollectionOverview = ({collections}) => {
    return(
        <div>
            {
                collections.map(({title, routeName, items, id})=>(
                    <PreviewCollection key={id} title={title} routeName= {routeName} items= {items}/>
                ))
                
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);