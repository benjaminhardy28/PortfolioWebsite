import Card from 'react-bootstrap/Card';
import CustomCarousel from "../components/CustomCarousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectCard({ title, techUsed, description, data, largeHeight, smallHeight }) {

    const cardTest = {
      borderRadius: '1em',
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
        <Card.Body
        //  style={{
        //   minHeight : window.innerWidth > 1100 ?  largeHeight : smallHeight
        //   }}
        >
          <Container >
            <Row>
              <Col>
                <Card.Title style={{fontSize:'150%', fontWeight: 'bold', }}>{title}</Card.Title>
                <Card.Subtitle  className="mb-2 text-muted" style={{lineHeight: '1.3rem', fontSize:'.85rem', marginTop: '.9rem'}}>
                  {techUsed.map( (skill) => (
                    <>          
                    <span style={{ display: 'inline-block', marginBottom: '1.2rem', marginRight: '.3rem' }}>
                      <span style={{ backgroundColor: '#c7ceff', padding: '.4rem', borderRadius: '.7rem' }}>{skill}</span>
                      <span> </span>
                    </span>   
                  </>
                ))}
                </Card.Subtitle>
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