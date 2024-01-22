import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Navigation';
import Intro from './Intro';
import TechnoCards from './TechnoCards';
import Projects from './Projects';

function App() {
  return (
    <div>
      <Nav/>
      <Intro/>  
      <TechnoCards/>
      <Projects />
    </div>
  );
}

export default App;
