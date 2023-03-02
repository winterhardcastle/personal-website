import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Speaker} from './Speaker'

export const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-1 ">
            <Canvas orthographic>
                <OrbitControls />   
                <ambientLight intensity={.2}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Speaker />
            </Canvas>
        </div>
    )
}   