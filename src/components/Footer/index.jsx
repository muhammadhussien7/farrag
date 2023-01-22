import React from 'react';
import { NavLink } from 'react-bootstrap';
import './style.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-content row'>
                    <p className='col-12 col-md'>&copy; 2022, My Portfolio. Made By Mo Farag 💜</p>
                    <div className='footer-icon d-flex col-12 col-md'>
                        <NavLink> <i className="fa-brands fa-facebook"></i> </NavLink>
                        <NavLink> <i className="fa-brands fa-linkedin"></i></NavLink>
                        <NavLink> <i className="fa-brands fa-github"></i> </NavLink>
                        <NavLink> <i className="fa-brands fa-twitter"></i> </NavLink>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;