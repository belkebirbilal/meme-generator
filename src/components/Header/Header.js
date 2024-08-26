import React from "react";
import logo from "../../images/Troll Face.png";
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Troll Face.png" />
                <span>Meme Generator</span>
            </div>
            <p>bilal belkebir</p>
        </header>
    )
}

export default Header;