/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 keyboard_mounts.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function KeyboardMounts(props:any) {
  const { nodes, materials } = useGLTF('/keyboard_mounts.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 9.55, 5.49]} scale={0.1}>
        <mesh geometry={nodes.Body1.geometry} material={materials['Rilsan Invent Natural - PA 11']} position={[61.18, -87.36, -105.64]} rotation={[-1.31, -0.29, -0.68]} scale={10} />
      </group>
      <pointLight intensity={1} decay={2} color="#fcfcfc" position={[-12.44, 12.49, 15.73]} />
    </group>
  )
}

useGLTF.preload('/keyboard_mounts.gltf')
