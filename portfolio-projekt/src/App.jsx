import React from "react";
import Header from "./Header";
import Kompetens from "./Kompetens";
import "./App.css";

function App() {
    let cardStyle = {
        height: "450px",
        width: "400px",
    };
    return (
        <div className="webpage">
            <Header />
            <div className="card-container">
                <div className="cards">
                    <Kompetens />
                </div>
                <div className="cards">
                    <h2>Hej mitt namn är Victor Andersson</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi, eaque ratione iusto corrupti perferendis
                        accusantium aliquam? Tempora nam sint nihil?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
