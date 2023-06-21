import React, { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {  useLocation, Route, Routes } from "react-router";
import Collections from "../collections/collections.component";
import { fetchCollectionsAsync } from "../../redux/shop/shop-actions";
import { connect } from "react-redux";


const ShopPage = ({fetchCollectionsAsync}) => {
    const location = useLocation();
    useEffect(()=> {
        fetchCollectionsAsync()
        // eslint-disable-next-line
    }, [])
    return(
        <div>
            <Routes>
                <Route path='/' element= {<CollectionOverview/>}/>
                <Route path={`${location.pathname.replace('/shop','')}`}element= {<Collections locationParam={location.pathname}/>}/>
            </Routes>
                

        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

export default connect(null,mapDispatchToProps)(ShopPage);