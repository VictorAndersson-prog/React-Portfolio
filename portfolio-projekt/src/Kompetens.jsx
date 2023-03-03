import React from "react";
import "./Kompetens.css";

export default function Kompetens() {
    const kompetenser = ["React", "Javascript", "HTML & CSS", "Git"];
    return (
        <div>
            <p className="text">{kompetenser[0]}</p>
            <span className="progress-bar">
                <span className="filler"></span>
            </span>
            <p className="text">{kompetenser[1]}</p>
            <span className="progress-bar">
                <span className="filler"></span>
            </span>
            <p className="text">{kompetenser[2]}</p>
            <span className="progress-bar">
                <span className="filler"></span>
            </span>
            <p className="text">{kompetenser[3]}</p>
            <span className="progress-bar">
                <span className="filler"></span>
            </span>
        </div>
    );
}
