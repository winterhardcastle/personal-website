
import './App.css'
import Navbar from './components/nav/Navbar'
import Background from './components/background/Background'
import AboutMe from './components/about/AboutMe'
import Projects from './components/projects/Projects'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ContactForm from './components/contact/ContactForm'
import { Button } from '@mui/material'
import { hackerText } from './utils/functions'
import { Html, Scroll, ScrollControls, useScroll} from '@react-three/drei'
import { Canvas} from '@react-three/fiber'
import ContactCTA from './components/nav/ContactCTA'
import {useEffect, useLayoutEffect, useRef, useState } from 'react'
import ScrollToHome from './components/nav/ScrollToHome'



function App() {
  const [numPages, setNumPages] = useState(5)
  const [counter, setCounter] = useState<boolean>(false)

  const computePages = () => {
    const footer = document.getElementById("footer")
    const pages:number = footer!==null ? (footer.getBoundingClientRect().bottom + 25) / window.innerHeight : 5
    setNumPages(pages)
  }

  const handleEvt = (evt:any) => {
    if(evt.type !== "resize"){
      if(counter !== true){
        setCounter(true)
        computePages()
      }
    }else{
      computePages()
    }
  }

  // window.addEventListener("resize", handleEvt)

  return (
  <div className="cursor-crosshair -z-50 absolute top-0 left-0 w-full h-full">
      <Canvas camera={{ fov: 90, near: 0.5, far: 750, position: [0, 0, 6]}}>
      <ScrollControls pages={numPages} damping={0.16}>
        <Scroll>  
          <Background />
        </Scroll>
        <Scroll html>
          <div onMouseOver={handleEvt} className="py-8 md:px-72">
          <Navbar />
          <div className='py-72'>
            <div className="inline-block">
              <h1 onMouseOver={hackerText} data-value="Winter Hardcastle" className="md:text-7xl text-3xl text-center font-bold uppercase">Winter Hardcastle</h1>
            </div>  
            <h2 className='pb-32 italic text-2xl uppercase'>creative software engineer and maker</h2>
            <ContactCTA />
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
          <ContactForm/>
          <div id="footer" className="pt-24">
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
