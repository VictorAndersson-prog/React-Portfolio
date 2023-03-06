import React from "react";
import "./Kompetens.css";

export default function Kompetens() {
    const kompetenser = [
        ["React", "60%"],
        ["Javascript", "70%"],
        ["HTML & CSS", "85%"],
        ["Git", "60%"],
        ["MongoDB", "50%"],
        ["NodeJS", "60%"],
    ];
    return (
        <div>
            {kompetenser.map((kompetens) => (
                <div className="progress-bar-container">
                    <p className="text">{kompetens[0]}</p>
                    <span className="progress-bar">
                        <span
                            className="filler"
                            style={{ "--fill-width": kompetens[1] }}
                        ></span>
                    </span>
                </div>
            ))}
        </div>
    );
}
