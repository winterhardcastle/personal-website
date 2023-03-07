import {useState} from 'react'

const Projects = () => {
    const [selected, setSelected] = useState("")
    
    return (
        <div>
            <h1 className="text-bold text-3xl">Projects</h1>
            <nav className="flex justify-center p-2">
                <a onClick={() => {setSelected("software")}} className="active:underline px-16 py-4 text-3xl text-bold">Software</a>
                <a onClick={() => {setSelected("hardware")}} className="px-16 py-4 text-3xl text-bold">Hardware</a>
            </nav>
        </div>
    )
}

export default Projects