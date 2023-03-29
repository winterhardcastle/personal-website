import {useState} from 'react'
import { hackerText } from '../../utils/functions'
import Hardware from './Hardware'
import Software from './Software'

const Projects = () => {
    const [selected, setSelected] = useState("software")

    return (
        <div className="pt-24 pb-64" id="projects">
            <h1 onMouseEnter={hackerText} data-value="PROJECTS" className="font-bold md:text-5xl text-2xl uppercase">Projects</h1>
            <nav className="flex justify-center p-2">
                <a onClick={() => {setSelected("software")}} className={`${selected === "software" ? 'underline font-bold' : 'font-semibold'} text-2xl underline-offset-8 md:px-12 px-4 py-4 uppercase`}>Software</a>
                <a onClick={() => {setSelected("hardware")}} className={`${selected === "hardware" ? 'underline font-bold' : 'font-semibold'} text-2xl underline-offset-8 md:px-12 px-4 py-4 uppercase`}>Hardware</a>
            </nav>
            <div>
                {selected === "software" ?
                <Software />
                : 
                <Hardware />
                }
            </div> 
        </div>
    )
}

export default Projects