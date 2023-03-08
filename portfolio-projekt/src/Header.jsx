import React from "react";
import "./Header.css";

export default function header() {
    return (
        <div className="head-container">
            <nav className="navbar-container">
                <span class="material-symbols-outlined">deployed_code</span>
                <ul>
                    <li className="navbar-text">Expreience</li>
                    <li className="navbar-text">About</li>
                    <li className="navbar-text">Contact</li>
                </ul>
            </nav>
        </div>
    );
}
