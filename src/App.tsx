
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/nav/Navbar'
import Background from './components/background/Background'
import AboutMe from './components/about/AboutMe'
import Projects from './components/projects/Projects'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ContactForm from './components/contact/ContactForm'
import { Button } from '@mui/material'
import { hackerText } from './utils/functions'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


function App() {
  return (
  <div className="cursor-crosshair -z-50 absolute top-0 left-0 w-full h-full">
      <Canvas>
      <ScrollControls pages={3.3} damping={0.1}>
        <Scroll>  
          <Background />
        </Scroll>
        <Scroll html>
          <div id="mainhtmlcontainer"  className="py-8 px-64">
          <Navbar/>
          <div className='py-64'>
            <div className="inline-block">
              <h1 onMouseOver={hackerText} data-value="Winter Hardcastle" className="md:text-7xl text-3xl text-center font-bold uppercase">Winter Hardcastle</h1>
            </div>  
            <h2 className='pb-32 italic text-2xl uppercase'>creative software engineer and maker</h2>
            <a className="p-16">
              <Button 
              onClick={() => {document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}}
              color="inherit" 
              size="large" 
              sx={{fontFamily: "monospace",fontSize: "18px", width: '200px', fontWeight:"bold", cursor:"crosshair"}} 
              variant="outlined">
              Contact Me! 
              </Button>
            </a>
            {/* <div onClick={() => {document.getElementById("projects")?.scrollIntoView({behavior: "smooth"})}} className="pt-64">
              <a>
                <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
              </a>
            </div> */}
          </div>  
          <Projects />
          {/* <div onClick={() => {document.getElementById("aboutme")?.scrollIntoView({behavior: "smooth"})}} className='pt-20 pb-32'>
              <a>
                <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
              </a>
          </div> */}
          <AboutMe />
          {/* <div onClick={() => {document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}} className='pt-44 pb-64'>
              <a>
                <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
              </a>
          </div> */}
          <ContactForm />
          <div className="pt-24">
            <p onMouseOver={hackerText} data-value="© 2023 Winter Hardcastle" className="text-sm font-light pt-4 border-t">© 2023 Winter Hardcastle</p>
          </div>
          </div>
        </Scroll>
      </ScrollControls>
    </ Canvas>
  </div>
  )
} 

export default App
