import React from "react";
import "./About.css";
export default function About() {
    return (
        <div className="about-container">
            <div className="about">
                <h1>
                    Hej mitt namn är Victor Andersson och jag är en
                    webbutvecklare
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat veritatis illo doloremque asperiores nostrum autem
                    dicta!
                </p>
            </div>
            <div className="img-container">
                <img
                    src="../public/img/EBM0871.jpg"
                    alt="porträtt"
                    style={{ width: "15rem" }}
                />
            </div>
        </div>
    );
}
