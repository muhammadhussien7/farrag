import React from 'react';
import { NavLink } from 'react-bootstrap';
import './style.css'; 

function About() {
    return (
        <div className='about' id='about'>
            <div className='main-title'>
                <h2>About Me</h2>
                <p>Why Choose Me?</p>
                <span className="rounded-circle d-block"> <span className="rounded-circle d-block"></span> </span>
            </div>
            <div className='container'>
                <div className='about-content row'>
                    <div className='about-img col-12 col-md animate__animated animate__bounceInLeft'>
                        <div className='about-layer'>
                            <img src='/images/LOGO3.png' alt='myPicture' className='img-fluid'/>
                        </div>
                    </div>
                    <div className='about-info col-12 col-md text-center text-md-start animate__animated animate__bounceInRight'>
                        <p>Hi :) I'm Mohamed Farrag 👋 .</p>
                        <p>
                            Fictional person for preview purposes :) 
                            I'm working with newest front-end frameworks like React . 
                            What you are seeing now is portfolio template from August 2020. 
                            If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. 
                            Thank you 💜
                        </p>
                        <div className='social-media justify-content-center justify-content-md-start'>
                            <NavLink> <i className="fa-brands fa-facebook fa-lg"></i> </NavLink>
                            <NavLink> <i className="fa-brands fa-linkedin"></i></NavLink>
                            <NavLink> <i className="fa-brands fa-github fa-lg"></i> </NavLink>
                            <NavLink> <i className="fa-brands fa-twitter fa-lg"></i> </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default About;