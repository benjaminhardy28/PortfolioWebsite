import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

const AboutMeCard = ({ open, onClose }) => {
    const overLay = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor : 'rgba(0,0,0,.3)',
        fontFamily: 'sans-serif',
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center'
    }
    const card = {
        width: '30em',
        borderRadius: '2em',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        border: 'none',
        zIndex: '-1',
        marginTop: '.5em',
        marginBottom: '.5em',
        padding: '1.5rem',
        
      }

    if(!open) return null
  return (
    <div style={overLay} >
        <Card style={card}>
            <Card.Body>
            <Card.Title style={{fontSize:'150%', fontWeight: 'bold'}} >More About Me <FontAwesomeIcon icon={faPeopleArrows} style={{fontSize:'100%', fontWeight: 'bold'}} />
            <span style={{position:'absolute', right:'1em', top:'1em', display:'block'}}  onClick={onClose} >
                <FontAwesomeIcon icon={faXmark} />
            </span> 
            </Card.Title> 
            <Card.Text >
            I'm a computer science student at Texas A&M working to become a software engineer. I enjoy full stack development and being able to work on a project from the ground up. At this point in my career, I'm constantly looking for ways to learn more. Outside of technology, I have a love for ice hockey, skiing, hiking, camping, and more. I have played hockey since I was 9 and my high school team even won the state championships two times in a row. Being raised in Dallas by parents from Canada, my two favorite teams are the Canadiens and Stars.
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}

export default AboutMeCard;