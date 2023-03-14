import {useState} from 'react'
import Hardware from './Hardware'
import Software from './Software'

const Projects = () => {
    const [selected, setSelected] = useState("software")

    return (
        <div id="projects">
            <h1 className="text-bold p-4 md:text-5xl text-2xl uppercase">Projects</h1>
            <nav className="flex justify-center p-2">
                <a onClick={() => {setSelected("software")}} className={`${selected === "software" ? 'underline text-3xl  font-bold' : 'text-2xl font-semibold'} underline-offset-8 md:px-16 px-4 py-4 uppercase`}>Software</a>
                <a onClick={() => {setSelected("hardware")}} className={`${selected === "hardware" ? 'underline text-3xl font-bold' : 'text-2xl font-semibold'} underline-offset-8 md:px-16 px-4 py-4 uppercase`}>Hardware</a>
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