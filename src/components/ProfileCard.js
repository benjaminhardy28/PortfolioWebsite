import Card from 'react-bootstrap/Card';
import SocialCard from './SocialCard';

function Profile({ }) {
    const card = { 
        width: '15rem',
        height: '8rem',  
        borderRadius: '20px',
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        border: 'none',
        marginTop: '15px',
        marginLeft: '50px',
    }
  return (
    <Card style={card}>
      <Card.Body >
        <pre style={{fontSize:'130%'}}>{'Connect With Me'}</pre>
        <SocialCard/>
      </Card.Body>
    </Card>
  );
}

export default Profile;