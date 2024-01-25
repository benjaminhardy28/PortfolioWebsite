import Card from 'react-bootstrap/Card';


function WorkCard({ title, subTitle, mainText }) {

  const cardTest = {
    width: '30em',
    height: '16em',
    borderRadius: '1em',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    border: 'none',
    zIndex: '-1',
    marginTop: '.5em',
    marginBottom: '.5em',
  }
  return (
    <>
      <Card style={cardTest}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle  className="mb-2 text-muted">{subTitle}</Card.Subtitle>
          <Card.Text>
            {mainText}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default WorkCard;