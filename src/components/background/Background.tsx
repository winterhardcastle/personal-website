import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import {Speaker} from './Speaker'
import {FilmCanister} from "./FilmCanister"
import {useState, useEffect, useRef} from 'react'
import { BikeBrake } from './BikeBrake'
import { Slavboard } from './Slavboard'
import { BucklingSpring } from './BucklingSpring'
import { KeyboardMounts } from './KeyboardMounts'
import { ElektraBoilerCap } from './ElektraBoilerCap'
import { ElektraSteamKnob } from './ElektraSteamKnob'

const Background = () => {
    
    return (
        <>
        {/* <div className="cursor-crosshair -z-50 absolute top-0 left-0 w-full h-[4300px]"> */}
            {/* <Canvas > */}
                {/* <OrbitControls /> */}
                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1}/>
                <ambientLight intensity={.2}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <BikeBrake />
                <Speaker />
                <FilmCanister />
                <Slavboard />
                <BucklingSpring />
                <KeyboardMounts />
                <ElektraBoilerCap />
                <ElektraSteamKnob />
            {/* </Canvas> */}
        {/* </div> */}
        </>
    )
}   

export default Background