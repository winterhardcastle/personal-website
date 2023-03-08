import {useState} from 'react'

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
                <div className="p-4 grid gap-4 grid-cols-3 grid-rows-3">  
                    <div className="border border-dotted rounded-xl hover:bg-[url('')] flex-col">
                        <h1 className="py-2 text-2xl text-bold uppercase">Fischer</h1>
                        <p className="py-2 px-4">
                            <span className="font-bold">Tech: </span> Typescript, NEXT.JS, Prisma, tailwindcss
                        </p>
                        <p className="py-2 px-4">
                            Fischer is a fact-checking webapp and chrome extension that integrates NLP 
                            and user contributions to determine the truthiness of information on the web.
                        </p>
                        <div className="flex justify-between align-center p-2">
                            <a href="" className="pt-2 pb-4 pl-24 " target="_blank" rel="noopener noreferrer">
                                <img width="40" height="40" src = "./src\assets\logos\iconmonstr-github-1.svg" alt="Github Logo"/>
                            </a>
                            <a href="" className="pt-2 pb-4 pr-24" target="_blank" rel="noopener noreferrer">
                                <img width="40" height="40" src = "./src\assets\logos\iconmonstr-globe-8.svg" alt="Web Logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="border border-dotted rounded-xl hover:bg-[url('')] flex-col">
                        <h1 className="py-2 text-2xl text-bold uppercase">Dive Data Depot</h1>
                        <p className="py-2 px-4">
                            <span className="font-bold">Tech: </span> Python, Pandas
                        </p>
                        <p className="py-2 px-4 text-bold">
                            Developed for Anduril Industries(formerly Dive Technologies),  Dive Data Depot is a data aggregation 
                            and analysis program that obtains critical mission statistics from AUV sensor data.

                        </p>
                        <div className="flex justify-between align-center p-2">
                            <a href="" className="pt-2 pb-4 pl-24 " target="_blank" rel="noopener noreferrer">
                                <img disabled width="40" height="40" src = "./src\assets\logos\iconmonstr-github-1.svg" alt="Github Logo"/>
                            </a>
                            <a href="" className="pt-2 pb-4 pr-24" target="_blank" rel="noopener noreferrer">
                                <img width="40" height="40" src = "./src\assets\logos\iconmonstr-globe-8.svg" alt="Web Logo"/>
                            </a>
                        </div>
                    </div>
                </div>
                : null
                }
            </div>
        </div>
    )
}

export default Projects