import Card from 'react-bootstrap/Card';
import CustomCarousel from "../components/CustomCarousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectCard({ title, techUsed, description, data }) {
    // const mobileCardContainer = { 
    //   minHeight: '400px',
    //   borderRadius: '20px',
    //   boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    //   border: 'none',
    //   display: 'flex', 
    //   zIndex: '-1',
    //   padding: '20px',
    //   marginTop: '20px',
    // }
    // const cardContainer = { 
    //   width: '90vw',
    //   height: '54vh',
    //   borderRadius: '20px',
    //   boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    //   border: 'none',
    //   display: 'flex', 
    //   zIndex: '-1',
    //   minHeight: '320px'
    // }

    const cardTest = {

      borderRadius: '1em',
      minHeight: '25em',
      maxWidth: '80em',
      boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
      border: 'none',
      zIndex: '-1',
      padding: 'em',
      display: 'flex', 
    }

  return (
        <>
      <Card style={cardTest}>
        <Card.Body >
          <Container >
            <Row>
              <Col>
                <Card.Title >{title}</Card.Title>
                <Card.Subtitle  className="mb-2 text-muted">{techUsed}</Card.Subtitle>
                <Card.Text >
                  <p>{description}</p>
                </Card.Text>
              </Col>
            {window.innerWidth > 1000 ? 
              <Col >
                <CustomCarousel picures_data={data}/>
              </Col>
            :
              null
            }
            </Row>
            {window.innerWidth > 1000 ?
          
          null
          :
          <Row style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CustomCarousel picures_data={data}/>
           </Row>
          }
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;