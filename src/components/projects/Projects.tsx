import {useState} from 'react'
import Hardware from './Hardware'
import Software from './Software'

const Projects = () => {
    const [selected, setSelected] = useState("software")

    return (
        <div>
            <h1 className="text-bold p-4 text-5xl uppercase">Projects</h1>
            <nav className="flex justify-center p-2">
                <a onClick={() => {setSelected("software")}} className={`${selected === "software" ? 'underline text-4xl  font-bold' : 'text-3xl font-semibold'} underline-offset-8 px-16 py-4 uppercase`}>Software</a>
                <a onClick={() => {setSelected("hardware")}} className={`${selected === "hardware" ? 'underline text-4xl font-bold' : 'text-3xl font-semibold'} underline-offset-8 px-16 py-4 uppercase`}>Hardware</a>
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