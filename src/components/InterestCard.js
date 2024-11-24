import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function InterestCard({ icon, title, subTitle, skills, subTitle2 }) {

    const cardTest = {
      width: '25em',
      height: '17rem',
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
          <Card.Title style={{fontWeight: 'bold'}} >{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" >{subTitle}</Card.Subtitle>
          <Card.Text style={{lineHeight: '1rem', fontSize:'.85rem'}}>
            {/*mainText*/}
            {skills.section1.map( (skill) => (
              <>      
                <span style={{ display: 'inline-block', marginBottom: '1.2rem', marginRight: '.3rem' }}>
                  <span style={{ backgroundColor: '#cadcfa', padding: '.4rem', borderRadius: '.7rem' }}>{skill}</span>
                  <span> </span>
                </span>    
                {/* <span style={{backgroundColor:'#d5d9f7', paddingLeft: '.3rem', paddingRight: '.25rem', borderRadius: '.7rem', display: 'inline-block'}} >{skill}</span>
                <span>  </span> */}
              </>
            ))}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted" >{subTitle2}</Card.Subtitle>
          <Card.Text style={{lineHeight: '1rem', fontSize:'.85rem'}}>
          {skills.section2.map( (skill) => (
              <>          
                <span style={{ display: 'inline-block', marginBottom: '1.2rem', marginRight: '.3rem' }}>
                  <span style={{ backgroundColor: '#c7ceff', padding: '.4rem', borderRadius: '.7rem' }}>{skill}</span>
                  <span> </span>
                </span>   
              </>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default InterestCard;