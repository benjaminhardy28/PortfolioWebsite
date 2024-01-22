import ProjectCard from "../components/ProjectCard";

var fcPictures = [
  {
    id: 1,
    image: require('../assets/controllerView.jpg'),
  },
  {
    id : 2,
    image: require('../assets/team.jpg'),
  },
  {
    id : 3,
    image: require('../assets/gameplay.png'),
  },
  {
    id : 4,
    image: require('../assets/livegame.png'),
  },
  {
    id : 5,
    image: require('../assets/wiring.jpg'),
  },
  {
    id : 6,
    image: require('../assets/Schematic.jpg'),
  },
  {
    id : 7,
    image: require('../assets/configPic.jpg'),
  },
  {
    id: 9,
    image: require('../assets/prototypePic.jpg')
  }
]
var cnPictures = [
  {
    id: 1,
    image: require('../assets/notifsImage.jpg'),
  },
  {
    id: 2,
    image: require('../assets/customNotifsImage.jpg'),
  },
  {
    id: 3,
    image: require('../assets/login.jpg'),
  },
  {
    id: 4,
    image: require('../assets/SignUpPic.jpg'),
  },
]

var gsPictures = [
  {
    id: 1,
    image: require('../assets/GsSnUp.jpg')
  },
  {
    id: 2,
    image: require('../assets/GsSgnIn.jpg')
  },
]

var pgPictures = [
  {
    id: 1,
    image: require('../assets/pg1.jpg')
  },
  {
    id: 2,
    image: require('../assets/pg2.jpg')
  },
  {
    id: 3,
    image: require('../assets/pg3.jpg')
  },
  {
    id: 4,
    image: require('../assets/pgstart.jpg')
  },
]

var ltPictures = [
  {
    id: 1,
    image: require('../assets/imgPic1.0.jpg')
  },
  {
    id: 2,
    image: require('../assets/imgPic1.1.jpg')
  },
  {
    id: 3,
    image: require('../assets/ARpic.jpg')
  },
  {
    id: 3,
    image: require('../assets/imgPic2.0.jpg')
  },
  {
    id: 4,
    image: require('../assets/imgPic2.1.jpg')
  }
  
]

var pfPictures = [
  {
    id: 1,
    image: require('../assets/pictureFrameFront.jpg')
  },
  {
    id: 2,
    image: require('../assets/pictureFrameSide.jpg')
  },
  {
    id: 3,
    image: require('../assets/pictureFrameTop.jpg')
  },
]



function Projects() {
    const projectContainer = { 
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center', 
        marginBottom: '50px',
    }
    const titleText = {
      display:'flex', 
      alignItems:'center', 
      justifyContent:'center', 
      fontFamily:'"Roboto", sans-serif', 
      fontWeight:'bold',  
      marginTop:'30px',
    }
    return (
      <div>
        <h1 style={titleText}>
          Personal Projects
        </h1>
        <div id="Foot_Keyboard" style={projectContainer}>
          <ProjectCard title="Foot Controlled Computer Keyboard" techUsed='Arduino, Circuitry, C++, Python, SQLite3, Tkinter, Serial Port Communication, Multithreading, MVC Design'
            description="This was a year-long project in my Senior year of high school where I led a team to develop a foot-controlled keyboard designed to help individuals lacking upper body extremities. Every 9 weeks we presented to a panel of engineers to evaluate our project. I was responsible for all software and electronic circuitry involved in this project. It was an amazing experience as we were able to develop the project from a problem, a solution, a design, and finally a product. This project taught me a lot about why I have such a passion for technology and building things to help people. Check out us using it to play Minecraft on my Github!
          
            " 
          data = {fcPictures} />
        </div>
        <div id="Custom_Notif" style={projectContainer}>
          <ProjectCard title="Custom Notification Website" techUsed='React Js, HTML, CSS, Jwts, Python Flask, SQLAlchemy, RESTful API, OpenAI API, Python Requests, Multithreading'
            description="This platform allows users to be notified of anything they specify on the internet. Notifications are generated and given to users based on the website they enter and the contents they want to be updated about. I have a demo video on my GitHub displaying the real-time notifications based on text changes.
          
            " 
          data = {cnPictures} />
        </div>
        <div id="Goal_App" style={projectContainer}>
          <ProjectCard title="Goal Completetion Social Network App" techUsed='React Native, Node Js, Express Js, PostgresQL, RESTful API, Jwts'
            description="This mobile app allows users to set and track their own goals and motivations while being able to share and compete with their friends. The project is not fully complete and more will be shown here shortly.
          
            " 
          data = {gsPictures} />
        </div>
        <div id="Java_Game" style={projectContainer}>
          <ProjectCard title="Java Platform Game From Scratch" techUsed='Java, Java Swing, Java Spring Boot, Spring MVC, Spring Data, Multithreading, MVC'
            description="This was a team project I worked on during my senior year of high school to build a Java platformer game from scratch. We drew all animations, developed game states, detected collisions, and implemented gravity. The project makes use of complex OOP principles as well as multithreading and MVC design for dynamic and clean gameplay.
          
            " 
          data = {pgPictures} />
        </div>
        <div id="AR_Glasses" style={projectContainer}>
          <ProjectCard title="AR Translation Glasses" techUsed='Raspberry Pi, Python, Google Translate API, Google Text-To-Speech API, Tesseract OCR API'
            description="This was a project I began when I was 16 to develop a pair of Augmented Reality (AR) glasses to serve as a translation device between different languages. The device allows for language translation
            via audio as well as text translation by taking pictures with the camera. I developed prototypes using reflection and magnification techniques but a final version was never completed with the glasses due to a lack of access to
            MicroLEDs, waveguides, and other advanced technology. I created a usable prototype that is handheld and has all of the functionality.
            " 
          data = {ltPictures} />
        </div>
        <div id="Digital_Frame" style={projectContainer}>
          <ProjectCard title="Digital Picture Frame" techUsed='Raspberry Pi, CAD, 3D-printing, Rclone'
            description= {' This is a DIY digital picture frame I built when I was 17. The images shown on the display are synced to Google Drive. Inspired by https://www.youtube.com/watch?v=3GC2EOQbrQo&t=680s, I used CAD to adjust the frame and synced the Raspberry Pi with Google Drive. This project was a fun way to get into linux and cloud sharing. '}
          data = {pfPictures} />
        </div>
      </div>

    );
  }
  
  export default Projects;