import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Speaker} from './Speaker'
import {FilmCanister} from "./FilmCanister"
import {useState, useEffect} from 'react'
import { BikeBrake } from './BikeBrake'
import { Slavboard } from './Slavboard'

const Background = () => {
    const [wheelPos, setWheelPos] = useState(0)

    document.addEventListener("scroll", () => {
            setWheelPos(window.scrollY / 50)
    })


    return (
        <div className="cursor-crosshair -z-50 absolute top-0 left-0 w-full h-[3600px]">
            <Canvas>
                {/* <OrbitControls />    */}
                <ambientLight intensity={.2}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <BikeBrake wheelPos={wheelPos}/>
                <Speaker wheelPos={wheelPos} />
                <FilmCanister wheelPos={wheelPos}/>
                <Slavboard wheelPos={wheelPos}/>
            </Canvas>
        </div>
    )
}   

export default Background