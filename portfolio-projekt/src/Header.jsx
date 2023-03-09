import React from "react";
import "./Header.css";

export default function header() {
    return (
        <nav className="navbar-container">
            <a href="">
                <span class="material-symbols-outlined">deployed_code</span>
            </a>
            <ul>
                <li className="navbar-text">
                    <a href="">Expreience</a>
                </li>
                <li className="navbar-text">
                    <a href="">About</a>
                </li>
                <li className="navbar-text">
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
