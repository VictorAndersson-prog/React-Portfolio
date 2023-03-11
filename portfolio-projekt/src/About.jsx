import React from "react";
import "./About.css";
import Exp from "./Exp";
export default function About() {
    return (
        <div className="about-container">
            <div className="about cards">
                <h1>
                    <span className="intro">Hej, mitt namn är</span>
                    <br />
                    <span style={{ fontSize: "50px" }}>Victor Andersson,</span>
                    <br />
                    Jag bygger digitala lösningar för webben.
                </h1>
                <p>
                    Jag skulle beskriva mig själv som ambitiös,punktlig och
                    intresserad av programmering. För mig är programmering en
                    passion och jag spenderar mycket tid på att lära mig nya
                    språk och tekniker för att förbättra mina färdigheter.
                    <br />
                </p>
            </div>
            <section className="beskrivning-container">
                <div className="cards beskrivning">
                    <p>
                        {" "}
                        En annan viktig aspekt av mitt arbete är samarbete och
                        lagarbete. Jag tror att den bästa koden och de bästa
                        projekten uppnås genom att samarbeta med andra och dra
                        nytta av varandras styrkor. Att jobba i lag är inte bara
                        mer produktivt, det är också mer roligt och givande.
                        <br />
                        <br />
                        Jag har alltid varit motiverad av att arbeta tillsammans
                        med andra och att hjälpa till att lösa problem och
                        utveckla innovativa lösningar. Därför är jag mycket
                        intresserad av att hitta likasinnade människor och
                        företag som värdesätter samarbete och teamwork. Jag ser
                        fram emot att fortsätta att utveckla mina färdigheter
                        som programmerare och att arbeta i team för att bygga
                        fantastiska produkter och lösningar tillsammans.
                    </p>
                </div>
                <div className="cards exp-box">
                    <div className="img-container">
                        <img src="/img/EBM0871.jpg" alt="porträtt" />
                    </div>
                    <div className="exp-container">
                        <Exp />
                    </div>
                </div>
            </section>
        </div>
    );
}
