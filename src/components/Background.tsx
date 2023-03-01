import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Speaker} from './Speaker'

export const Background = () => {
    return (
        <div className="h-screen -z-1 ">
            <Canvas >
                <OrbitControls />   
                <ambientLight intensity={.2}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Speaker />
            </Canvas>
        </div>
    )
}   