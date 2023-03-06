import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="z-1 flex justify-between items-center">
            <h1 className="p-2 text-2xl text-center font-bold">WH</h1>
            <div className="flex justify-between">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> 
            </div>
        </div>
    )   
}

export default Navbar