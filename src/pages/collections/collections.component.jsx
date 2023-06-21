import React from "react";
import './collections.style.css';
import { connect } from "react-redux";
import { selectCollection , selectShopIsLoading} from "../../redux/shop/shop-selectors";
import Cart from "../../components/cart-component/cart-component";
import Loader from "../../components/loader.component/loader.component";

const Collections = ({collection, isLoading}) => {
    return(    
    <div>
        {isLoading ? <Loader/> : 
        <div>
            <h1 className="Collection-Title">{collection && collection.title }</h1>
            <div className="Collection-Style">

                { collection &&
                    collection.items.map((item)=> <Cart key={item.id} item={item}/> )
                }
            </div>
        </div>
        }
        
    </div>
)}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.locationParam)(state),
    isLoading: selectShopIsLoading(state)
})

export default connect(mapStateToProps)(Collections);

