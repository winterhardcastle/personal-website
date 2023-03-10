import { Button } from "@mui/material"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="select-none -1 flex justify-between items-center">
            <a href='/home' className="hover:no-underline align-center p-2 text-3xl text-center font-bold">WH</a>
            <div className="p-2 flex justify-center">
                <Link to='' onClick={() => {window.scrollTo({ top: 2200, behavior: 'smooth' })}}>ABOUT</Link>
                <Link to='' onClick={() => {window.scrollTo({ top: 1100, behavior: 'smooth' })}} className="px-12">PROJECTS</Link>
                <Link to='' onClick={() => {window.scrollTo({ top: 1100, behavior: 'smooth' })}}>CONTACT</Link>
            </div>
            <a target="_blank" rel="noopener noreferrer" href='/Winter Hardcastle_resume.pdf'> 
                <Button color="inherit" sx={{fontWeight:"bold", cursor:"crosshair"}} variant="outlined">RESUME</Button>
            </a>
        </div>  
    ) 
}

export default Navbar