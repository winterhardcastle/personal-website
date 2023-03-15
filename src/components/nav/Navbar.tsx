import { Button } from "@mui/material"
import { hackerText } from "../../utils/functions"


const Navbar = () => {
    return (
        <>
        <div className="select-none flex justify-between items-center">
            {/* <a href='/home' className="hover:no-underline align-center p-2 text-5xl text-center font-bold">WH</a> */}
            <div className="max-md:hidden flex">
                <a href="https://github.com/winterhardcastle" className="pt-2 pb-4 " target="_blank" rel="noopener noreferrer">
                    <img width="40" height="40" src = "./src\assets\logos\iconmonstr-github-1.svg" alt="Github Logo"/>
                </a>
                <a href="https://www.linkedin.com/in/winter-hardcastle/" className="pt-2 pb-4 px-8" target="_blank" rel="noopener noreferrer">
                    <img width="40" height="40" src = "./src\assets\logos\iconmonstr-linkedin-3.svg" alt="Linkedin Logo"/>
                </a>
                <a href="https://www.instagram.com/winterhardcastle/" className="pt-2 pb-4 " target="_blank" rel="noopener noreferrer">
                    <img width="40" height="40" src = "./src\assets\logos\iconmonstr-instagram-11.svg" alt="Instagram Logo"/>
                </a>
            </div>
            <div className="p-4 flex items-center">
                <a onMouseOver={hackerText} data-value="ABOUT" onClick={() => {document.getElementById("aboutme")?.scrollIntoView({behavior: "smooth"})}}>ABOUT</a>
                <a onMouseOver={hackerText} data-value="PROJECTS" className="px-12" onClick={() => {document.getElementById("projects")?.scrollIntoView({behavior: "smooth"})}}>PROJECTS</a>
                <a onMouseOver={hackerText} data-value="CONTACT" className="pr-12" onClick={() => {document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}}>CONTACT</a>
                <a className="max-md:hidden"target="_blank" rel="noopener noreferrer" href='/Winter Hardcastle_resume.pdf'> 
                    <Button color="inherit" sx={{fontFamily: "monospace", fontWeight:"bold", cursor:"crosshair"}} variant="outlined">RESUME</Button>
                </a>
            </div>
        </div>
        <a className="md:hidden"target="_blank" rel="noopener noreferrer" href='/Winter Hardcastle_resume.pdf'> 
            <Button color="inherit" sx={{fontFamily: "monospace", fontWeight:"bold", cursor:"crosshair"}} variant="outlined">RESUME</Button>
        </a>
        </>
    ) 
}

export default Navbar