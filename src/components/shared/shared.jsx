import React from "react";
import './shared.css'
export const Header = () =>{
    return (
        <>
        <div className="header">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </div>
        </>
    )
}

export const Footer = () =>{
    return (
        <>
        <div className="footer">
            <p>&copy;copyright by Sandeep</p>
        </div>
        </>
    )
} 

export default Footer;