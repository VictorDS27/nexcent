import React from "react";
import Logo from "../img/Logo.png";
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
                <div className="logo">
                    <a href="">
                        <img src={Logo} />
                    </a>
                </div>

                <ul>
                    
                        <a href="">Home</a>
                        <a href="">Service</a>
                        <a href="">Feature</a>
                        <a href="">Product</a>
                        <a href="">Testimonial</a>
                        <a href="">FAQ</a>
                
                </ul>

                <div class="navbar__login">
                    <a href="" className="login">Login</a>
                    <a href="" className="subscribe">Sign Up</a>
                </div>
        </nav>
        
    )
}

export default Navbar;