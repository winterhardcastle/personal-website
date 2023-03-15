/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 elektra_boiler_cap.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ElektraBoilerCap(props:any) {
  const { nodes, materials } = useGLTF('/elektra_boiler_cap.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[3, 3.24, 0]} rotation={[-1.75, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Body1.geometry} material={materials['Nylon 6-6 (White)']} rotation={[Math.PI / 9, 0, 0]} scale={1} />
      </group>
      <pointLight intensity={1} decay={2} color="#fcfcfc" position={[-12.44, 12.49, 15.73]} />
    </group>
  )
}

useGLTF.preload('/elektra_boiler_cap.gltf')