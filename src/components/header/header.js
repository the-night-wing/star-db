import React from "react";
import "./header.css"

function Header () {
    return(
        <div className="header d-flex">
                <h3 className="logo"><a href="#app">Star DB</a></h3>
            <ul className="nav-bar d-flex">
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;