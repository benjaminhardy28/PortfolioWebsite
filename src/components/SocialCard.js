import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import '../extraAffects.css';

function SocialCard({ title, subTitle, mainText,}) {
    var my_email = 'benjahardy99@gmail.com';
    var mailtoURL = 'mailto:' + my_email;
    function directEmail() {
        window.location.href = mailtoURL;
    }

  return (
    <div style={{fontSize: '3em', marginTop: '.3em' }}>
        <a href="https://github.com/benjaminhardy28/Portfolio" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="iconSpace" style={{color:'black'}} icon={faSquareGithub}/>
        </a>
        <a href="https://www.linkedin.com/in/ben-hardy-470620285/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon className="iconSpace" style={{color:'#0A66C2'}}  icon={faLinkedin}/>
        </a>
        <a>
            <FontAwesomeIcon onClick={directEmail} className="iconSpace" icon={faEnvelope}/>
        </a>
    </div>
  );
}

export default SocialCard;