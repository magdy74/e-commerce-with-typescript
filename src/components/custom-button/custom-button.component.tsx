import React, {ButtonHTMLAttributes, FC} from "react";
import "./custom-button.style.css"

type ButtonProps = {
    isGoogleAuth?: boolean;
    isCheckOut?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;


const CustomButton: FC<ButtonProps> = ({children, isGoogleAuth, isCheckOut, ...otherProps}) =>(
    <div>
        <button className={`${isCheckOut ? 'checkOutButton' : ''} ${isGoogleAuth ? "google-button" : ''} submit-button`} {...otherProps}>
            {children}
        </button>
    </div>
)

export default CustomButton;