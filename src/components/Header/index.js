import React from 'react';
import "./styles.scss"
import logo from "../../assets/img/logo.png"


const Header = (props) => {
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h2 style={{fontWeight: "bold"}}>App Store</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;
