import React from 'react';
import { useState } from 'react';
import {Col , Tab , Nav , Row } from 'react-bootstrap';
import axios from 'axios';

import './style.css';
import { useEffect } from 'react';

function Resume() {
    const [menu , setMenu] = useState([]);
    const [items , setItems] = useState([]);
    const [skills , setSkills] = useState([]);
    const [projects , setProjects] = useState([]);
    
    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setMenu(res.data.resuem_menu));
    })

    const myMenuItems = menu.map((item) => {
        return(
            <Nav variant="pills" className="flex-column" key ={item.id}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey={item.key}> 
                            <i className={item.icon_class}></i>
                            <span> {item.content}</span>
                        </Nav.Link> 
                    </Nav.Item>         
                </Nav>               
           </Nav>
        )
    });

    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setItems(res.data.personal_info));
    });

    const myItems = items.map((item) => {
        return(
            <div className='col-12 col-lg-6 personal-item' key={item.id}>
                <i className={item.icon_class}></i>
                <span>{item.content}</span>
            </div>  
        )
    })

    

    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setSkills(res.data.resuem_skills));
    });

    const mySkills = skills.map((item) => {
        return(
            <div className='skills-item' key={item.id}>
                <p>
                    {item.name}
                    <span>{item.target}</span>
                </p>
                <div className='target'></div>
            </div>
        )
    });
    

    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setProjects(res.data.resuem_projects));
    });

    const myProjects = projects.map((item) => {
        return(
            <div className='project-item' key={item.id}>
                <div className='d-flex justify-content-between'>
                    <h2>{item.name}</h2>
                    <p>{item.year}</p>
                </div>
                <h5>{item.desc} </h5>
                <Nav.Link href={item.link}>Show Demo</Nav.Link>
            </div>
        )
    })

    return (
        <div className='resume' id='resume'>
            <div className='main-title'>
                <h2>My Resume</h2>
                <p>My formal Bio Details</p>
                <span className="rounded-circle d-block"> <span className="rounded-circle d-block"></span> </span>
            </div>
            <div className='container'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='resume-content'>
                        <Col sm={12} md={5} lg={4} className='resume-menu'>
                            {myMenuItems}
                        </Col>
                        <Col sm={12} md={7} lg={8} className='resume-info'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className='personal-info row'>
                                    <div className='row'>
                                        {myItems}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seconde" className='resume-skills'>
                                    {mySkills}
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className='resuem-projects'>
                                    {myProjects}
                                </Tab.Pane>
                                <Tab.Pane eventKey="four" className='personal-skills'>
                                    <ul>
                                        <li> Excellence in high cultural and social awareness </li>
                                        <li> Take responsibility and manage work under pressure </li>
                                        <li> Ability to work in a team spirit </li>
                                        <li> Quick response to dialogue and communication with others </li>
                                        <li>  Proficiency in the use of a computer </li>
                                        <li>  I can speak English at a good level </li>
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}
export default Resume

/*<i className="fa-brands fa-html5"></i>
<i className="fa-brands fa-css3"></i>
<i className="fa-brands fa-js"></i>
<i className="fa-brands fa-react"></i>
<i className="fa-brands fa-bootstrap"></i> */

