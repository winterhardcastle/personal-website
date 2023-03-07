import { Button } from "@mui/material"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="z-1 flex justify-between items-center">
            <a href='/home' className="p-2 text-3xl text-center font-bold">WH</a>
            <div className="p-2 flex justify-center">
                <Link to="/about">About</Link>
                <Link className="px-12"to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="pl-12"> 
                    <Button variant="outlined">Resume</Button>
            </div>
        </div>
    ) 
}

export default Navbar