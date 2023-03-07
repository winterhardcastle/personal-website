import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Speaker} from './Speaker'
import {FilmCanister} from "./FilmCanister"
import {useState, useEffect} from 'react'

export const Background = () => {
    const [wheelPos, setWheelPos] = useState(0)

    document.addEventListener("wheel", () => {
        setWheelPos(window.scrollY)
    })


    return (
        <div className="-z-50 absolute top-0 left-0 w-full h-screen">
            <Canvas >
                {/* <OrbitControls />    */}
                <ambientLight intensity={.2}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Speaker wheelPos={wheelPos} />
                <FilmCanister wheelPos={wheelPos}/>
            </Canvas>
        </div>
    )
}   