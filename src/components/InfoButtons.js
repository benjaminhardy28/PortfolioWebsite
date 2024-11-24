import Button from 'react-bootstrap/Button';
// import { useState } from 'react';
import resume from '../assets/Benjamin-Hardy-Resume2025.pdf';
// import AboutMeCard from './AboutMeCard';

function InfoButtons() {
    // const [openAboutMe, setOpenAboutMe] = useState(false);


    return (
        <div>
            <a href={resume} target="_blank" rel="noreferrer" style={{color:'white'}}>
                <Button variant="outline-primary" >Resume</Button>
            </a>
            {/* <Button onClick={()=> setOpenAboutMe(true)} variant="outline-primary">About Me</Button>{' '}
            <AboutMeCard open={openAboutMe} onClose={() => setOpenAboutMe(false)}/> */}
        </div>
    );
}

export default InfoButtons;