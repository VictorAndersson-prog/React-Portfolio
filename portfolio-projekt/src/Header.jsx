import React from "react";
import "./Header.css";

export default function header() {
    return (
        <div className="head-container">
            <div className="overlay">
                <nav className="navbar-container">
                    <h4 className="navbar-text">Home</h4>
                    <h4 className="navbar-text">Projects</h4>
                    <h4 className="navbar-text">Competence</h4>
                    <h4 className="navbar-text">Contact Me</h4>
                </nav>
            </div>
        </div>
    );
}
