
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
        <h1 className="text-7xl text-center text-bold">Winter Hardcastle</h1>
        <h2 className='text-2xl'>Software Engineer, Maker, Designer</h2>
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
