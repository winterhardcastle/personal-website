import {useState} from 'react'

const Projects = () => {
    const [selected, setSelected] = useState("software")
    
    return (
        <div>
            <h1 className="text-bold p-4 text-5xl">PROJECTS</h1>
            <nav className="flex justify-center p-2">
                <a onClick={() => {setSelected("software")}} className="px-16 py-4 text-3xl text-bold">SOFTWARE</a>
                <a onClick={() => {setSelected("hardware")}} className="px-16 py-4 text-3xl text-bold">HARDWARE</a>
            </nav>
            <div>
                {selected === "software" ?
                <div className="p-2 grid grid-cols-3 grid-rows-3">
                    <div className="hover:bg-[url('')] flex-col">
                        <h1 className="p-4 text-2xl text-bold">FISCHER</h1>
                        <p className="p-2 text-bold">
                            Fischer is a fact-checking webapp and chrome extension that integrates NLP 
                            and user contributions to determine the truthiness of information on the web.
                        </p>
                    </div>
                </div>
                : null
                }
            </div>
        </div>
    )
}

export default Projects