import React from "react";
import "./custom-button.style.css"

const CustomButton = ({children, isGoogleAuth, ...otherProps}) =>(
    <div>
        <button className={`${isGoogleAuth ? "google-button" : ''} submit-button`} {...otherProps}>
            {children}
        </button>
    </div>
)

export default CustomButton;