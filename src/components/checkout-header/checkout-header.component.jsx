import React from "react";
import './checkout-header.style.css';

const CheckoutHeader = () => {
    const headerItems = ["Product","Description","Quantity","Price","Remove"]
    return(
        <div className="checkout-header">
            {headerItems.map((item) =>
            <div className="checkout-header-title">
                <span>{item}</span>
            </div>
            )}
        </div>
    )
}

export default CheckoutHeader;