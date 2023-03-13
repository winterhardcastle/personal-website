
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/nav/Navbar'
import Background from './components/background/Background'
import AboutMe from './components/about/AboutMe'
import Projects from './components/projects/Projects'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ContactForm from './components/contact/ContactForm'


function App() {
  return (
    <div> 
      <Background />
      <Navbar/>
      <div className='py-72'>
        <h1 className="text-6xl text-center font-bold uppercase">Winter Hardcastle</h1>
        <h2 className='italic text-2xl uppercase'>creative software engineer and maker</h2>
        <div onClick={() => {document.getElementById("projects")?.scrollIntoView({behavior: "smooth"})}} className="pt-96">
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
