import ProjectCard from "../components/ProjectCard";

var lbDesign = [
  {
    id: 1,
    image: require('../assets/load_balancer_schematic.png')
  }
]

var fcPictures = [
  {
    id: 1,
    image: require('../assets/controllerView.jpg'),
  },
  {
    id : 2,
    image: require('../assets/gameplay.png'),
  },
  {
    id : 3,
    image: require('../assets/livegame.png'),
  },
  {
    id : 4,
    image: require('../assets/wiring.jpg'),
  },
  {
    id : 5,
    image: require('../assets/Schematic.jpg'),
  },
  {
    id : 6,
    image: require('../assets/configPic.jpg'),
  },
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
    image: require('../assets/SignUpPic.jpg'),
  },
  {
    id: 4,
    image: require('../assets/notif_schematic.png')
  }
]

// var gsPictures = [
//   {
//     id: 1,
//     image: require('../assets/GsSnUp.png')
//   },
//   {
//     id: 2,
//     image: require('../assets/GsSgnIn.jpg')
//   },
//   {
//     id: 3,
//     image: require('../assets/GsMain.jpg')
//   },
// ]

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
  // {
  //   id: 3,
  //   image: require('../assets/pgstart.jpg')
  // },
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

var aaPictures = [
  {
    id: 1,
    image: require('../assets/AAhome.png')
  },
  {
    id: 2,
    image: require('../assets/AAfind.png')
  },
  {
    id: 3,
    image: require('../assets/AAtickets.png')
  }
]

var ncrPictures = [
  {
    id: 1,
    image: require('../assets/NCRDocumentPortal.png')
  },
  {
    id: 2,
    image: require('../assets/NCRDocumentBuilder.png')
  },
  {
    id: 3,
    image: require('../assets/NCRDocumentsView.png')
  }
]


const footKeyboardTech = [
  'Arduino',
  'Circuitry',
  'C++',
  'Python',
  'SQLite3',
  'Tkinter',
  'Serial Port Communication',
  'Multithreading', 
  'MVC Design'
]
const customNotifTech = [
  'React Js', 
  'HTML', 
  'CSS', 
  'Jwts', 
  'Python Flask',
  'SQLAlchemy', 
  'RESTful API', 
  'OpenAI API', 
  'Python Requests', 
  'Multithreading',
]
// const goalAppTech = [
//   'React Native', 
//   'Node.Js', 
//   'Express.Js', 
//   'PostgresQL', 
//   'RESTful API', 
//   'Jwts',
// ]
const aeroAdviceTech = [
  'React Js',
  'React Boostrap',
  'OpenAI API',
]
const javaGameTech = [
  'Java', 
  'Java Swing', 
  'Java Spring Boot', 
  'Spring MVC', 
  'Spring Data', 
  'Multithreading', 
  'MVC'
]
const ARTech = [
  'Raspberry Pi', 'Python', 'Google Translate API', 'Google Text-To-Speech API', 'Tesseract OCR API'
]
const digitalFrameTech =['Raspberry Pi', 'CAD', '3D-printing', 'Rclone']
const documentationBuilderTech = ['.NET', 'Blazor', 'Restful Web API', 'SQL Server', 'Telerik']
const loadBalancerTech = ['GoLang', 'Docker', 'AWS', 'Express.js', 'PostgreSQL']



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
      marginTop:'1.5em',
    }


    return (
      <div>
        <h1 style={titleText}>
          My Work
        </h1>
        <div id="Documentation_Builder" style={projectContainer}>
          <ProjectCard title="Documentation Builder - NCR Atleos" techUsed={documentationBuilderTech}
            description="My internship project was to build this full-stack web platform to allow NCR employees to create, manage, and serve the company's API documentation through the web. The website has automatic saving and document history tracking, as well as custom image uploading and insertions. The documentation builder allows users to easily build structured API documentation that is easy to follow and understand for clients.
          
            " 
          data = {ncrPictures} largeHeight = '27em' smallHeight = '50em'/>
        </div>
         <div id="Custom_Notif" style={projectContainer}>
          <ProjectCard title="Custom Notification Website" techUsed={customNotifTech}
            description="This platform lets users get notified of anything they specify on the internet. Notifications are generated and given to users based on the website they enter and the contents they want to be updated about. I have a demo video on my GitHub that displays real-time notifications based on text changes. The website is securely built using JWTs and Oauth2 PKCE flow.
          
            " 
          data = {cnPictures} largeHeight = '25em' smallHeight = '39em'/>
        </div>
        {/* <div id="Goal_App" style={projectContainer}>
          <ProjectCard title="Goal Completetion Social Network App" techUsed={goalAppTech}
            description="This mobile app allows users to set and track their own goals and motivations while being able to share and compete with their friends. Users can create their own goals, request and follow their friends, and view their friends goals. The Backend is hosted on AWS EC2 utilizing Express.Js and PostgresQL ran using Docker Compose.
            " 
          data = {gsPictures} largeHeight = '32em' smallHeight = '42em'/>
        </div> */}
        <div id="Load_Balancer" style={projectContainer}>
          <ProjectCard title="Custom Load Balancer" techUsed={loadBalancerTech}
            description="Through this project I have been able to learn more about system design, microservices, and developing scalable applications. I used Go to develop the load balancer which redirects requests to several EC2 instances using a round robin technique. These EC2 instances are part of an Auto Scaling Group and the load balancer uses AWS SDK to periodically fecth the IP addresses of the instances in the ASG.     
            " 
          data = {lbDesign} largeHeight = '27em' smallHeight = '50em'/>
        </div>
        <div id="Foot_Keyboard" style={projectContainer}>
          <ProjectCard title="Foot Controlled Computer Keyboard" techUsed={footKeyboardTech}
            description="This was a year-long project in my Senior year of high school where I led a team to develop a foot-controlled keyboard designed to help individuals lacking upper body extremities. I was responsible for all software and electronic circuitry involved in this project. This project taught me a lot about why I have such a passion for technology and building things to help people. Check out us using it to play Minecraft on my Github!
          
            " 
          data = {fcPictures} largeHeight = '27em' smallHeight = '50em'/>
        </div>
        <div id="Java_Game" style={projectContainer}>
          <ProjectCard title="Java Platform Game From Scratch" techUsed={javaGameTech}
            description="This was a team project I worked on during my senior year of high school to build a Java platformer game from scratch. We drew all animations, developed game states, detected collisions, and implemented gravity. The project makes use of complex OOP principles as well as multithreading and MVC design for dynamic and clean gameplay.         " 
          data = {pgPictures} largeHeight = '32em' smallHeight= '43em'/>
        </div>
        <div id="AeroAdvice" style={projectContainer}>
          <ProjectCard title="AeroAdvice" techUsed={aeroAdviceTech}
            description="This was a hackathon project for TamuHack where I worked on a team to develop a platform to allow users to find trip locations based on their preferences of time, cuisine, activities, budgets, dates, and more. " 
          data = {aaPictures} largeHeight= '25em' smallHeight= '31em' />
        </div>
        <div id="AR_Glasses" style={projectContainer}>
          <ProjectCard title="AR Translation Glasses" techUsed={ARTech}
            description="This was a project I began when I was 16 to develop a pair of Augmented Reality (AR) glasses. The device allows for language translation
            via audio as well as text translation by taking pictures with the camera. I developed prototypes using reflection and magnification techniques but a final version was never completed with the glasses due to a lack of access to
            MicroLEDs, waveguides, and other advanced technology." 
          data = {ltPictures} largeHeight= '25em' smallHeight= '43em'/>
        </div>
        <div id="Digital_Frame" style={projectContainer}>
          <ProjectCard title="Digital Picture Frame" techUsed={digitalFrameTech}
            description= {' This is a DIY digital picture frame I built when I was 17. The images shown on the display are synced to Google Drive. Inspired by https://www.youtube.com/watch?v=3GC2EOQbrQo&t=680s, I used CAD to adjust the frame and synced the Raspberry Pi with Google Drive. This project was a fun way to get into linux and cloud sharing. '}
          data = {pfPictures} largeHeight= '32em' smallHeight= '40em'/>
        </div> *
      </div>

    );
  }
  
  export default Projects;