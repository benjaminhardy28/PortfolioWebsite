import Card from 'react-bootstrap/Card';
import CustomCarousel from "../components/CustomCarousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectCard({ title, techUsed, description, data, largeHeight, smallHeight }) {
  const cardStyle = {
    border: '0px solid #000',
    borderRadius: '0', // no rounded corners
    padding: '1.5rem',
    margin: '1rem 0',
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', // subtle outline
  };

  const titleStyle = {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    marginBottom: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };

  const techBadge = {
    backgroundColor: '#c7ceff',
    padding: '0.4rem 0.7rem',
    fontSize: '0.8rem',
    borderRadius: '8px'
  };

  const textStyle = {
    lineHeight: '1.5',
    fontSize: '1rem',
    marginBottom: '1.5rem',
  };

  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Card.Title style={titleStyle}>{title}</Card.Title>
              <Card.Subtitle style={subtitleStyle}>
                {techUsed.map((skill, idx) => (
                  <span key={idx} style={techBadge}>{skill}</span>
                ))}
              </Card.Subtitle>
              <Card.Text style={textStyle}>{description}</Card.Text>
            </Col>
            <Col lg={6}>
              <CustomCarousel picures_data={data} />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
