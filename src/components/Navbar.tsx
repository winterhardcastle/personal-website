import { Button } from "@mui/material"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="z-1 flex justify-between items-center">
            <a href='/home' className="align-center p-2 text-3xl text-center font-bold">WH</a>
            <div className="p-2 flex justify-center">
                <Link to="/about">ABOUT</Link>
                <Link className="px-12"to="/projects">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <a target="_blank" rel="noopener noreferrer" href='/Winter Hardcastle_resume.pdf'> 
                <Button color="inherit" sx={{cursor:"crosshair"}} variant="outlined">RESUME</Button>
            </a>
        </div>  
    ) 
}

export default Navbar