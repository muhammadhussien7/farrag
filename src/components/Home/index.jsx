import React from 'react';
import './style.css';
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from 'react-bootstrap';
import 'animate.css';


function Home() {
    return (
        <div className='home' id='home'>
            <div className='home-layer'>
                <div className='home-content'>
                    <p>Hello I'm</p>
                    <h1>
                        <Typewriter
                            words={[
                                "Mohamed Farrag",
                                "Front End Developer",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <button>Download CV</button>
                </div>
            </div>
            <NavLink href='#about' className=''>
                <i className="fa-solid fa-computer-mouse fa-lg animate__animated animate__bounce animate__infinite	infinite  animate__slow"></i>
            </NavLink>
        </div>
    )
}
export default Home;
