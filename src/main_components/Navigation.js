import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Link } from 'react-scroll';


function Navigation( ) {
  const title = useTypingEffect("cd Ben_Hardy_Portfolio", 300)


  return (
    <div style={{fontColor:'black', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
      {window.innerWidth > 1100 ?
        <Navbar 
          style={{backgroundColor:'90be6d'}}>
            <Container fluid>
              <Navbar.Brand>
                <span style={{color:'green', fontWeight:'bold'}}>my@computer:~$</span>
                <span style={{color:'black'}}>{title}</span>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  <NavDropdown title="Projects" id="basic-nav-dropdown" style={{ marginRight: '4vw' }}>
                    <NavDropdown.Item >
                      <Link to="Foot_Keyboard" style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>
                        Foot Controlled Computer Keyboard</Link>
                      </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="Custom_Notif" style={{display:'block'}} spy={true} smooth={true} offset={-100} duration={300}>Custom Notification Website</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="Goal_App"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>Goal Setting App</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="Java_Game"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>Java Platform Game From Scratch</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="AR_Glasses"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>AR Translation Glasses</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="Digital_Frame"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>Digital Picture Frame</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link >
                    <Link to="Skills" spy={true} smooth={true} offset={-30} duration={300} style={{marginRight: '5vw'}}>Skills</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar> 
            :
            <Navbar 
            style={{backgroundColor:'90be6d'}}>
              <Container fluid>
                <Navbar.Brand style={{ position:'relative', fontSize: '4.3vw'}}>
                  <span style={{color:'green', fontWeight:'bold'} }>my@computer:~$</span>
                  <span style={{color:'black'}}>{title}</span>
                  </Navbar.Brand>
                <Navbar.Toggle/> 
                </Container>
            </Navbar> 
             }
    </div>

  );
}

export default Navigation;