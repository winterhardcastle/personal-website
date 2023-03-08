
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Background from './components/Background'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function App() {
  return (
    <div> 
      <Background />
      <Navbar/>
      <div className='py-72'>
        <h1 className="text-6xl text-center text-bold">WINTER HARDCASTLE</h1>
        <h2 className='italic text-2xl'>CREATIVE SOFTWARE ENGINEER AND MAKER</h2>
        <div className='py-32'>
          <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
        </div>
      </div>
      <Projects />
      <AboutMe />
    </div>
  )
}

export default App
