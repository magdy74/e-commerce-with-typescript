import React from "react";
import './collections.style.css';
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";
import Cart from "../../components/cart-component/cart-component";

const Collections = ({collection}) => {
    const {items, title} = collection;
    return(
    <div>
        <h1 className="Collection-Title">{title}</h1>
        <div className="Collection-Style">
            {
                items.map((item)=> <Cart key={item.id} item={item}/> )
            }
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.locationParam)(state)
})

export default connect(mapStateToProps)(Collections);

