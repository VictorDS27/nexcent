import React from "react";
import './Hero.css';
import Illustration from '../img/Illustration.png';

const Hero = () => {
    return(

        <div className="hero">
            <section className="hero__container">
                <div className="hero__content">
                    <h1>Lessons and insights <br/>
                    <span>from 8 years</span></h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <a href="">Register</a>
                </div>

                <div className="Illustration">
                <img src={Illustration} />
                </div>
            </section>

                <div className="Dot__contant">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="5" fill="#4CAF4F"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle opacity="0.3" cx="5" cy="5" r="5" fill="#4CAF4F"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle opacity="0.3" cx="5" cy="5" r="5" fill="#4CAF4F"/>
                </svg>
                </div>
        </div>
    )
}

export default Hero;