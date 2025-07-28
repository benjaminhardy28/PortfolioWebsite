import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import headShot  from '../assets/headshot.jpg';
import '../extraAffects.css'
import SocialCard from "../components/SocialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

function Intro() {
    const intro = {
        fontFamily: "monospace",
        minHeight: window.innerHeight-30,
        padding: '8vw',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        maxHeight:'4vw'
      };


    return (
        <div style={intro}>
            <Container>
                <Row>
                    <Col style={{ boxShadow: '',}}>
                        <span style={{fontSize: window.innerWidth > 1100 ? '2rem' : '3.2vh'}} className="titleH1">
                            <FontAwesomeIcon icon={faTerminal} style={{color: '3B71CA', fontFamily: '"Roboto", sans-serif',}}/>
                            Hi I'm Ben! A CS student at Texas A&M.
                        </span>
                        <span style={{ fontWeight: 'bold', fontSize: window.innerWidth > 1100 ? '1.5rem' : '2.7vh'}}>
                                <pre></pre>
                                {' To put it simply, I love building and innovating things.'} 
                        </span>  
                        <pre></pre>
                        <span style={{fontSize: window.innerWidth > 1100 ? '1.3rem' : '2.4vh'}}>
                         {"I'm motivated by the potential to use tech to improve people's quality of life."}
                        </span> <pre></pre>
                        <span style={{ fontSize: window.innerWidth > 1100 ? '1.4rem' : '2.4vh' }}>
                            I have diverse {' '}
                            <Link
                                to="Skills"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={300}
                                style={{ textDecoration: 'underline', color: '#007bff', cursor: 'pointer' }}
                            >
                                experience
                            </Link>
                            , and I love building projects in both{' '}
                            <Link
                                to="Software_Projects"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={300}
                                style={{ textDecoration: 'underline', color: '#007bff', cursor: 'pointer' }}
                            >
                                Software
                            </Link>
                            {' and '}
                            <Link
                                to="Embedded_Projects"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={300}
                                style={{ textDecoration: 'underline', color: '#007bff', cursor: 'pointer' }}
                            >
                                Embedded Systems
                            </Link>
                            !
                            </span>
                        <div style={{marginTop: '2em'}}>
                            {/* <InfoButtons/> */}
                            <SocialCard/>
                        </div>
                    </Col>
                    {window.innerWidth > 1100 ?
                    <Col>
                    <div className="	.d-lg-none .d-xl-block" style={{ display: 'flex', justifyContent: 'center'}}>
                        <Image style={{ height:'32rem', width:'28rem'}} src={headShot} className="profileShadow" />
                    </div>
                </Col>
                :
                        null
                }
                    
                </Row>
            </Container>
        </div>
    )
}

export default Intro