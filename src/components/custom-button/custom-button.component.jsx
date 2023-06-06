import React from "react";
import "./custom-button.style.css"

const CustomButton = ({children, isGoogleAuth, isCheckOut, ...otherProps}) =>(
    <div>
        <button className={`${isCheckOut ? 'checkOutButton' : ''} ${isGoogleAuth ? "google-button" : ''} submit-button`} {...otherProps}>
            {children}
        </button>
    </div>
)

export default CustomButton;