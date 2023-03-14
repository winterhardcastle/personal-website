
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/nav/Navbar'
import Background from './components/background/Background'
import AboutMe from './components/about/AboutMe'
import Projects from './components/projects/Projects'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ContactForm from './components/contact/ContactForm'
import { Button } from '@mui/material'


function App() {
  return (
    <div> 
      <Background />
      <Navbar/>
      <div className='py-64'>
        <h1 className="md:text-6xl text-3xl text-center font-bold uppercase">Winter Hardcastle</h1>
        <h2 className='pb-32 italic text-2xl uppercase'>creative software engineer and maker</h2>
        <a className="p-16">
          <Button 
          onClick={() => {document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}}
          color="inherit" 
          size="large" 
          sx={{fontSize: "18px", width: '200px', fontWeight:"bold", cursor:"crosshair"}} 
          variant="outlined">
          Contact Me! 
          </Button>
        </a>
        <div onClick={() => {document.getElementById("projects")?.scrollIntoView({behavior: "smooth"})}} className="pt-64">
          <a>
            <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
          </a>
        </div>
      </div>  
      <Projects />
      <div onClick={() => {document.getElementById("aboutme")?.scrollIntoView({behavior: "smooth"})}} className='pt-12 pb-32'>
          <a>
            <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
          </a>
      </div>
      <AboutMe />
      <div onClick={() => {document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}} className='pt-52 pb-64'>
          <a>
            <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
          </a>
      </div>
      <ContactForm />
      <div className="pt-24">
        <p className="text-sm font-light pt-4 border-t">© 2023 Winter Hardcastle</p>
      </div>
    </div>
  )
}

export default App
