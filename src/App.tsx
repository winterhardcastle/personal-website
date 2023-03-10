
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
        <div onClick={() => {window.scrollTo({ top: 1100, behavior: 'smooth' })}} className='pt-72'>
          <a>
            <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
          </a>
        </div>
      </div>  
      <Projects />
      <div onClick={() => {window.scrollTo({ top: 2200, behavior: 'smooth' })}} className='pt-12 pb-32'>
          <a>
            <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
          </a>
      </div>
      <AboutMe />
      <div onClick={() => {window.scrollTo({ top: 3000, behavior: 'smooth' })}} className='pt-12 pb-32'>
          <a>
            <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff", fontSize: 60}} />
          </a>
      </div>
      <ContactForm />
    </div>
  )
}

export default App
