import { Button } from "@mui/material"
import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { hackerText, scrollToElement } from "../../utils/functions"


const Navbar = () => {
    const data = useScroll()

    return (
        <div>
        <div className="z-100 select-none flex justify-center md:justify-between items-center">
            {/* <a href='/home' className="hover:no-underline align-center p-2 text-5xl text-center font-bold">WH</a> */}
            <div className="max-md:hidden flex">
                <a href="https://github.com/winterhardcastle" className="pt-2 pb-4 " target="_blank" rel="noopener noreferrer">
                    <img width="40" height="40" src = "/logos/iconmonstr-github-1.svg" alt="Github Logo"/>
                </a>
                <a href="https://www.linkedin.com/in/winter-hardcastle/" className="pt-2 pb-4 px-8" target="_blank" rel="noopener noreferrer">
                    <img width="40" height="40" src = "/logos/iconmonstr-linkedin-3.svg" alt="Linkedin Logo"/>
                </a>
                <a href="https://www.instagram.com/winterhardcastle/" className="pt-2 pb-4 " target="_blank" rel="noopener noreferrer">
                    <img width="40" height="40" src = "/logos/iconmonstr-instagram-11.svg" alt="Instagram Logo"/>
                </a>    
            </div>
            <div className="p-4 flex align-center items-center justify-center">
                <a onMouseOver={hackerText} data-value="ABOUT" onClick={() => {data.el.scrollTop+= scrollToElement('aboutme') + 500}}>ABOUT</a>
                <a onMouseOver={hackerText} data-value="PROJECTS" className="px-12" onClick={() => {data.el.scrollTop+=scrollToElement('projects') + 350}}>PROJECTS</a>
                <a onMouseOver={hackerText} data-value="CONTACT" className="md:pr-12" onClick={() => {data.el.scrollTop+=data.el.scrollHeight}}>CONTACT</a>
                <a className="max-md:hidden"target="_blank" rel="noopener noreferrer" href='/Winter Hardcastle_resume.pdf'> 
                    <Button color="inherit" sx={{fontFamily: "monospace", fontWeight:"bold", cursor:"crosshair"}} variant="outlined">RESUME</Button>
                </a>
            </div>
        </div>
        <a className="md:hidden"target="_blank" rel="noopener noreferrer" href='/Winter Hardcastle_resume.pdf'> 
            <Button color="inherit" sx={{fontFamily: "monospace", fontWeight:"bold", cursor:"crosshair"}} variant="outlined">RESUME</Button>
        </a>
        </div>
    ) 
}

export default Navbar