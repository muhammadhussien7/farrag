import React , {Fragment , useState , useEffect}from 'react';
import { Nav , Navbar , Container , Offcanvas } from 'react-bootstrap';
import './style.css';


function Header({sections}) {
    const [link , setLink] = useState(1);
    const [nav , setNav] = useState(false);

    //nav list
    const myLinks = sections.map((section) => {
        const activeLink = () => {
            setLink(section.id)
        }

        return(
            <Fragment>
                <Nav.Link 
                    className={`${link === section.id ? 'active' : 'link'}`}
                    onClick={activeLink}
                    href={section.Id} key={section.id}> {section.name}
                    {
                        // <div className='bulltes'>
                        // <span></span>
                        // <span></span>
                        // </div>
                    }
                </Nav.Link>
                
            </Fragment>
        )
    })

    //handel header
    const changBackground = () => {
        if(window.scrollY >= 10){
            setNav(true);
        }else{
            setNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll' , changBackground);
    })
    
    return (
        <Fragment>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className = {`${nav ? 'nav-background' : 'nav'}`}>
                    <Container>
                        <Navbar.Brand>
                            <Nav.Link href='#home'> <img className='nav-logo' src='/images/Logo.png' alt='nav-logo'/> </Nav.Link>
                        </Navbar.Brand>
                        <Nav>
                            {myLinks}
                        </Nav>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Navbar.Brand >
                                    <Nav.Link href='#home'> <img src='/images/Logo2.png' alt='nav-logo' className='nav-logo'/> </Nav.Link>
                                </Navbar.Brand>
                            </Offcanvas.Header>
                            <Offcanvas.Body className= 'list-body'>
                                <Nav className="justify-content-end flex-grow-1">
                                    {myLinks}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </Fragment>
    )
}
export default Header;