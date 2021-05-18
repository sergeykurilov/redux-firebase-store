import React from 'react';
import "./styles.scss"
import logo from "../../assets/img/logo.png"
import {Link} from "react-router-dom";


const Header = (props) => {
    const {currentUser} = props;
    // console.log(currentUser)
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to={"/"}>
                        <img src={logo} alt="logo"/>
                    </Link>
                    <h2 style={{fontWeight: "bold"}}>App Store</h2>
                </div>
                <div className="callToActions">
                    {currentUser && (
                        <ul>
                            <li>
                                <span>
                                    LogOut
                                </span>
                            </li>
                        </ul>
                    )}
                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};


Header.defaultProps = {
    currentUser: null,
}

export default Header;
