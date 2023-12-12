import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
import movies from '../data/movies.json';

export default function Home() {
    const [items, setItems] = useState(movies);
    console.log(movies)

    const settings = {
        className:"center-slider",
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2500,
        autoplay: true
      };

    return (
        <>
            <NavBar  />
            
            <div className="px-4 mt-5">
                <div className="row mt-5 justify-content-center">
                    <h3 className="">Orders and deliveries</h3>
                </div>
                
                <Slider {...settings}>
                    {items.map((item, index) => <Movie data={item} key={index} />)}
                </Slider>

            </div>

            <Footer />
        </>
    );
}