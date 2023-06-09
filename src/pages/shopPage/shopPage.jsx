import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {  useLocation, Route, Routes } from "react-router";
import Collections from "../collections/collections.component";


const ShopPage = () => {
    const location = useLocation()
    return(
        <div>
            <Routes>
                <Route path='/' element= {<CollectionOverview/>}/>
                <Route path={`${location.pathname.replace('/shop','')}`}element= {<Collections locationParam={location.pathname}/>}/>
            </Routes>
                

        </div>
    )
}


export default ShopPage;