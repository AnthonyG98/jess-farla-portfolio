import React from "react"
import {withRouter} from 'react-router';
import GalleryImg from "../images/gallery.png"
import ImgOne from "../images/phone.jpg"
import ImgTwo from "../images/picasso.jpg"
import ImgThree from "../images/sleep.jpg"
import ImgFour from "../images/window.jpg"
import ImgFive from "../images/anthony.jpg"
import ImgSix from "../images/arm.jpg"
import ImgSeven from "../images/cat.jpg"

function Gallery() {
    return(
        <div className="gallery-container">
            <div className="gal-head-container">
                <h1 className="gallery-head">Gallery</h1>
            </div>
            <div className="img-container">
                <img src={ImgOne} alt="" className="gal-img" id="phone" />
                <img src={ImgTwo} alt="" className="gal-img" />
                <img src={ImgThree} alt="" className="gal-img" />
                <img src={ImgFour} alt="" className="gal-img" />
                <img src={ImgFive} alt="" className="gal-img" id="tony"/>
                <img src={ImgSix} alt="" className="gal-img" />
                <img src={ImgSeven} alt="" className="gal-img" />
            </div>
        </div>
    )
}

export default withRouter(Gallery)