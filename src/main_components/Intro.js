import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import headShot  from '../assets/headshot.jpg';
import '../extraAffects.css'
import SocialCard from "../components/SocialCard";
import InfoButtons from "../components/InfoButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

function Intro() {
    const intro = {
        paddingTop: "2vh",
        paddingLeft: "2vw",
        fontFamily: "monospace",
        height: window.innerHeight,
      };

    return (
        <div style={intro}>
            <Container >
                <Row>
                    <Col>
                        <span style={{fontSize:'180%'}}>
                            <FontAwesomeIcon icon={faTerminal} style={{color: 'red'}}/>
                            Hi I'm Ben! A CS student at Texas A&M.
                        </span>
                        <span style={{ fontWeight: 'bold', fontSize:'150%'}}>
                                {' To put it simply, I love building and innovating things.'} 
                        </span>  
                        <span style={{ fontSize:'150%'}}>
                         {"I'm motivated by the potential to use tech to improve people's quality of life."}
                        </span> <pre></pre>
                        <span style={{fontSize: '170%',}}>{' Check out some of my Work!\n'}</span>
                        <div style={{marginTop: '2em'}}>
                            <InfoButtons/>
                            <SocialCard/>
                        </div>
                    </Col>
                    {window.innerWidth > 1100 ?
                    <Col>
                    <div className="	.d-lg-none .d-xl-block">
                        <Image style={{ height:'20em', width:'18em'}} src={headShot} className="profileShadow" roundedCircle/>
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