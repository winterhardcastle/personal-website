import { Button } from "@mui/material"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="select-none -1 flex justify-between items-center">
            {/* <a href='/home' className="hover:no-underline align-center p-2 text-5xl text-center font-bold">WH</a> */}
            <div className="flex">
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
            <div className="p-2 flex justify-center">
                <Link to='' onClick={() => {document.getElementById("aboutme")?.scrollIntoView({behavior: "smooth"})}}>ABOUT</Link>
                <Link to='' onClick={() => {document.getElementById("projects")?.scrollIntoView({behavior: "smooth"})}} className="px-12">PROJECTS</Link>
                <Link to='' onClick={() => {document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}}>CONTACT</Link>
            </div>
            <a target="_blank" rel="noopener noreferrer" href='/Winter Hardcastle_resume.pdf'> 
                <Button color="inherit" sx={{fontWeight:"bold", cursor:"crosshair"}} variant="outlined">RESUME</Button>
            </a>
        </div>  
    ) 
}

export default Navbar