import React from "react"
import brickWall from "../images/brick-wall.png"
function Contact(){
    return(
        <div className="contact-container">
            <div className="contact-head-container">
                <h1 className="contact-head">Say Hi!</h1>
            </div>
            <form id="form">
                <label className="label">Name:</label>
                <input 
                className="input"
                type="text"/>
                <label className="label">Email:</label>
                <input 
                className="input"
                type="text"/>
                <label className="label">Message:</label>
                <textarea
                id="message"
                className="input"
                type="text"/>
                <button type="submit" className="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact