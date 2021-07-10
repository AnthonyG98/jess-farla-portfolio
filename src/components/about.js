import React from "react"
import Compton from "../images/compton-monument.png"
function About() {
    return(
        <div className="about-container">
            <div className="about-text-container">
                <h1 className="about-head">Hey, </h1><nobr />
                <p className="about-text">I'm Jessica Farla, an artist based 
                in Compton, California. I try my best to paint the urban decay in the colors I see fit.
                </p>
            </div>
            <img src={Compton} alt="dandelion" className="dandy"/>
        </div>
    )
}

export default About