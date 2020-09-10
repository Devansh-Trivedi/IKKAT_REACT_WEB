import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.css";



function Carousel(){
    return(
        <div className="carousel">
            <AliceCarousel autoPlay autoPlayInterval="4000">
                <img src={"/images/shop2.jpg"} className="sliderimg"/>
                <img src={"/images/designimg.jpg"} className="sliderimg"/>
                <img src={"/images/home.jpg"} className="sliderimg"/>
                <img src={"/images/shop1.jpg"} className="sliderimg"/>
            </AliceCarousel>
        </div>
    )
}
export default Carousel;