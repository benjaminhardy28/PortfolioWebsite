import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function InterestCard({ icon, title, subTitle, mainText, subTitle2, mainText2 }) {

    const cardTest = {
      width: '25em',
      height: '16.4em',
      borderRadius: '1.5em',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      border: 'none',
      zIndex: '-1',
      marginTop: '.5em',
      marginBottom: '.5em',
    }



  return (
    <>
      <Card style={cardTest}>
        <Card.Body>
          <FontAwesomeIcon icon={icon} />
          <Card.Title >{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" >{subTitle}</Card.Subtitle>
          <Card.Text >
            {mainText}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted" >{subTitle2}</Card.Subtitle>
          <Card.Text >
            {mainText2}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default InterestCard;