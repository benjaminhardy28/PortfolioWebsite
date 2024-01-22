import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InterestCard from '../components/InterestCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faMicrochip, faNetworkWired, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import WorkCard from '../components/WorkCard';

function TechnoCards() {
    const titleText = {
      display:'flex', 
      alignItems:'center', 
      justifyContent:'center', 
      fontFamily:'"Roboto", sans-serif', 
      fontWeight:'bold',  
      marginTop:'2em',
    }

    return (

      <div id="Skills">
        <h1 style={titleText}>
          Current Skills
        </h1>
        <Container >
          <Row>
            <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <InterestCard  icon={faLaptopCode} title="Front End Development" subTitle="FrameWorks" mainText="React Native, React JS" subTitle2="Tools" mainText2="React Bootstrap"/>
            </Col>
            <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <InterestCard icon={faNetworkWired} title="Back End Development" subTitle="FrameWorks" mainText="Java Spring Boot, Express/Node Js, Python Flask" subTitle2="Databases" mainText2="PostgresQL, Microsoft SQL Server, SQLite3, SQLAlchemy"/>
            </Col>
            <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <InterestCard icon={faMicrochip} title="Other Cool Technologies" subTitle="Software" mainText="Web Scraping (Python Requests/BeautifulSoup4, Selenium) GUI's (Python Tkinter and ttkBootstrap), Excel/VBA" subTitle2="Electronics" mainText2="Arduino, Raspberry Pi"/>
            </Col>
          </Row>
          <h1 style={titleText}>
          Work Experience
        </h1>
          <Row>
            <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <WorkCard title="E3 Entegral Solutions" subTitle="Software Development Intern" mainText="Implemented a system to gather and web scrape data to auto-generate daily reports. Made use of Python Requests, BeautifulSoul4, Selenium, Microsoft SQL Server, and Excel/VBA."/>
            </Col>
            {window.innerWidth > 1100 ?
            <Col xs={1} style={{display: 'flex'}}>
              <FontAwesomeIcon icon={faCodeFork} class="fa-2xs fa-rotate-270" style={{fontSize: '20px'}}/>
            </Col>
          :
            null
          }
            
            <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <WorkCard title="What next?" subTitle="Software Development Intern ..." mainText="I'm currently looking for some kind of internship program which allows me to learn and grow as much as I can as a developer. I am constantly trying to explore and learn more about different facets of software engineering and I'm open to many different kind of positions."/> 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default TechnoCards;