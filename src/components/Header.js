import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <Link to="/">
            <div className="header-image-container">
                <img src="home.png" alt="home" />
            </div>
        </Link>
    )
}

export default Header;
