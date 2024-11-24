import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Link } from 'react-scroll';


function Navigation( ) {
  const title = useTypingEffect("cd Ben_Hardy_Portfolio", 300)

//90be6d
  return (
    <div style={{fontColor:'white', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
      {window.innerWidth > 1100 ?
        <Navbar 
          style={{backgroundColor:'rgba(28, 25, 25, 1)'}}>
            <Container fluid>
              <Navbar.Brand>
                <span style={{color:'#3B71CA', fontWeight:'bold'}}>my@computer:~$</span>
                <span style={{color:'white'}}>{title}</span>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  <Nav.Link >
                    <Link to="Skills" spy={true} smooth={true} offset={-30} duration={300} style={{marginRight: '3vw', color:'white'}}>Skills</Link>
                  </Nav.Link>
                  <NavDropdown id="basic-nav-dropdown" style={{ marginRight: '15vw'}}
                        title={ <span style={{color: 'white'}}>Projects</span>} >
                    <NavDropdown.Item >
                      <Link to="Documentation_Builder"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>Documentation Builder</Link>
                    </NavDropdown.Item>
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
                      <Link to="Load_Balancer"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>Custom Load Balancer</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="Java_Game"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>Java Platform Game From Scratch</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="AeroAdvice"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>AeroAdvice Website</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="AR_Glasses"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>AR Translation Glasses</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="Digital_Frame"  style={{display:'block'}}  spy={true} smooth={true} offset={-100} duration={300}>Digital Picture Frame</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar> 
            :
            <Navbar 
            style={{backgroundColor:'rgba(28, 25, 25, 1)'}}>
              <Container fluid>
                <Navbar.Brand style={{ position:'relative', fontSize: '2vh'}}>
                  <span style={{fontWeight:'bold', color:'#3B71CA',} }>my@computer:~$</span>
                  <span style={{color:'white'}}>{title}</span>
                  </Navbar.Brand>
                <Navbar.Toggle/> 
                </Container>
            </Navbar> 
             }
    </div>

  );
}

export default Navigation;