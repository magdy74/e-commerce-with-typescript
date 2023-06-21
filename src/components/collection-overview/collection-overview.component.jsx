import React from "react";
import PreviewCollection from '../previewCollection/previewCollection.component'
import { connect } from "react-redux";
import { selectShopCollections, selectShopIsLoading } from "../../redux/shop/shop-selectors";
import { createStructuredSelector } from "reselect";
import Loader from "../loader.component/loader.component";

const CollectionOverview = ({collections, isLoading}) => {
    return(
        <div>
            {   isLoading ? <Loader/> :
                collections.map(({title, routeName, items, id})=>(
                    <PreviewCollection key={id} title={title} routeName= {routeName} items= {items}/>
                ))
                
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    collections: selectShopCollections,
    isLoading: selectShopIsLoading

})

export default connect(mapStateToProps)(CollectionOverview);