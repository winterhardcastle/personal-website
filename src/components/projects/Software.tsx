const Software = () => {
    return (
        <div className="p-4 grid gap-6 grid-cols-3 grid-rows-2"> 
            <div className="transition ease-in-out group z-0 relative rounded-xl bg-cover hover:bg-[url('/src/assets/images/fischer-homepage.png')] flex-col">
                <div className="rounded-xl invisible group-hover:visible -z-10 absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,.6)]"></div>
                    <div>  
                        <h1 className="pt-4 pb-2 text-2xl font-bold uppercase">Fischer</h1>
                        <p className="py-2 px-4">
                            <span className="font-bold">Tech: </span> Typescript, NEXT.JS, Prisma, tailwindcss
                        </p>
                        <p className="py-2 px-4">
                            Fischer is a fact-checking webapp and chrome extension that integrates NLP 
                            and user contributions to determine the truthiness of information on the web.
                        </p>
                    </div>   
                <div className="flex justify-between align-center p-2">
                    <a href="https://github.com/orgs/FSA2211-Team-6/repositories" className="pt-2 pb-4 pl-24 " target="_blank" rel="noopener noreferrer">
                        <img width="40" height="40" src = "./src\assets\logos\iconmonstr-github-1.svg" alt="Github Logo"/>
                    </a>
                    <a href="https://faction-fischer.vercel.app/posts" className="pt-2 pb-4 pr-24" target="_blank" rel="noopener noreferrer">
                        <img width="40" height="40" src = "./src\assets\logos\iconmonstr-globe-8.svg" alt="Web Logo"/>
                    </a>
                </div>
            </div>
            <div className="group z-0 relative rounded-xl bg-cover hover:bg-[url('/src\assets\images\personal-website.png')] flex-col">
                <div className="rounded-xl invisible group-hover:visible -z-10 absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,.6)]"></div>
                <h1 className="pt-4 pb-2 text-2xl text-bold uppercase">Personal Website</h1>
                <p className="py-2 px-4">
                    <span className="font-bold">Tech: </span> Typescript, React.js, Three.js, tailwindcss
                </p>
                <p className="py-2 px-4">
                    This is the website that you are currently browsing, and functions as a portfolio of the most
                    meaningful work that I have done! 
                </p>
                <div className="flex justify-between align-center p-2">
                    <a href="https://github.com/winterhardcastle/personal-website" className="pt-2 pb-4 pl-24 " target="_blank" rel="noopener noreferrer">
                        <img width="40" height="40" src = "./src\assets\logos\iconmonstr-github-1.svg" alt="Github Logo"/>
                    </a>
                    <a href="" className="pt-2 pb-4 pr-24" target="_blank" rel="noopener noreferrer">
                        <img width="40" height="40" src = "./src\assets\logos\iconmonstr-globe-8.svg" alt="Web Logo"/>
                    </a>
                </div>
            </div>
            <div className="group z-0 relative rounded-xl bg-cover hover:bg-[url('/src\assets\images\AUV.jpg')] flex-col">
                <div className="rounded-xl invisible group-hover:visible -z-10 absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,.6)]"></div>
                <h1 className="pt-4 pb-2 text-2xl text-bold uppercase">Dive Data Depot</h1>
                <p className="py-2 px-4">
                    <span className="font-bold">Tech: </span> Python, Pandas
                </p>
                <p className="py-2 px-4 text-bold">
                    Developed for Anduril Industries(formerly Dive Technologies),  Dive Data Depot is a data aggregation 
                    and analysis program that obtains critical mission statistics from AUV sensor data.
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
            <div className="group z-0 relative rounded-xl bg-cover hover:bg-[url('/src\assets\images\robhinhood-neopixel.jpg')] flex-col">
                <div className="rounded-xl invisible group-hover:visible -z-10 absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,.6)]"></div>
                <h1 className="pt-4 pb-2 text-2xl text-bold uppercase">Stock LED Display</h1>
                <p className="py-2 px-4">
                    <span className="font-bold">Tech: </span> Python, Raspberry PI, 
                </p>
                <p className="py-2 px-4">
                    This program displays a real-time visual representation of the success of your stock portfolio using Neopixel LED lights and
                    the Robinhood API! 
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
            <div className="group z-0 relative rounded-xl bg-cover hover:bg-[url('/src\assets\images\coffee-castle.png')] flex-col">
                <div className="rounded-xl invisible group-hover:visible -z-10 absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,.6)]"></div>
                <h1 className="pt-4 pb-2 text-2xl text-bold uppercase">Coffee Castle</h1>
                <p className="py-2 px-4">
                    <span className="font-bold">Tech: </span> Javascript, React, Sequelize, tailwindcss
                </p>
                <p className="py-2 px-4">
                    An E-commerce website with a large collection of coffees for sale. My work on this project was mainly concentrated on the
                    checkout feature, as well as the back-end/data models. 
                </p>
                <div className="flex justify-between align-center p-2">
                    <a href="https://github.com/Team-Chrome/GraceShopper" className="pt-2 pb-4 pl-24 " target="_blank" rel="noopener noreferrer">
                        <img width="40" height="40" src = "./src\assets\logos\iconmonstr-github-1.svg" alt="Github Logo"/>
                    </a>
                    <a href="https://graceshopper-uewg.onrender.com/products/6" className="pt-2 pb-4 pr-24" target="_blank" rel="noopener noreferrer">
                        <img width="40" height="40" src = "./src\assets\logos\iconmonstr-globe-8.svg" alt="Web Logo"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Software