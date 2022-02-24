import React, { useState } from 'react';
import logo from "../../../src/priyanka.jpg";
import "./about.scss";


const About = () => {

    return (
        <section id="About" className="about-container">
            <div className="about">
            <div className="about_image">
            <img src={logo} alt="aboutImage"/>
            </div>
            <div className="about_desc">
            <h1>About Me</h1>
            <p>I completed my Post graduation in VLSI Designs and Embedded Systems. I joined Quintype Technolgies pvt ltd, in
                 2018 and worked there as a front end developer majorly handling clients issues and diagnosing cross browser issues and fixing them across various Quintype products on daily bases.
                 At present working as a Software developement Engineer at Giveindia</p>
                 <div className="contact">
                     <div className="contact-desc">
                         <h3>Contact Details </h3>
                      
                         <p>Bangalore</p>
                         <div className="contact-info">
                         <p>9538447361 / 7019493734</p>
                         <a className="email" href="mailto:priyankaashok322@gmail.com">priyankaashok322@gmail.com</a>
                         </div>
                     </div>
                     <a className="download" target="_blank" href="https://drive.google.com/file/d/12ublf8WI8oyjhycawNGAJyLYwlyEdLXy/view?usp=sharing" download="Priyanka Resume">Download Resume</a>
                 </div>
            </div>
            </div>
            
        </section>
    )
}

export default About