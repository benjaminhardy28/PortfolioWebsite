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
      marginTop:'1.5em',
    }

    const frontEndSkills = {
      "section1": [
        "React Native",
        "React Js",
        ".NET Blazor"
      ],
      "section2": [
        "React Bootstrap",
        "Telerik UI Components"
      ]
    };

    const backEndSkills = {
      "section1": [
        "Java Spring Boot",
        "Express/Node Js",
        "Python Flask",
        ".NET Web API"
      ],
      "section2": [
        "PostgresQL",
        "Microsoft SQL Server",
        "SQLite3",
        "SQLAlchemy",
      ]
    };

    const otherSkills = {
      "section1": [
        "Web Scraping",
        "GUI's",
        "Excel/VBA",
      ],
      "section2": [
        "Arduino",
        "Raspberry Pi",
      ]
    };
    


    return (

      <div id="Skills">
        <h1 style={titleText}>
          Skills
        </h1>
        <Container >
          <Row>
            <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <InterestCard  icon={faLaptopCode} title="Front End Development" subTitle="FrameWorks" skills={frontEndSkills} subTitle2="Tools"/>
            </Col>
            <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <InterestCard icon={faNetworkWired} title="Back End Development" subTitle="FrameWorks" skills={backEndSkills} subTitle2="Databases"/>
            </Col>
            <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <InterestCard icon={faMicrochip} title="Other Cool Technologies" subTitle="Software" skills={otherSkills} mainText="Web Scraping (Python Requests/BeautifulSoup4, Selenium) GUI's (Python Tkinter and ttkBootstrap), Excel/VBA" subTitle2="Electronics" mainText2="Arduino, Raspberry Pi"/>
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
              <FontAwesomeIcon icon={faCodeFork} class="fa-2xs fa-rotate-270" style={{fontSize: '20px', zIndex: '-1'}}/>
            </Col>
          :
            null
          }
            
            <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <WorkCard title="NCR Atleos" subTitle="Software Engineering Intern" mainText="Documentation Builder Website (see down below). Developed AI/ML models to analyze ATM transaction volumes by using historical trends providing insights into anomalies and forecasting using ML.NET and Python. "/> 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default TechnoCards;