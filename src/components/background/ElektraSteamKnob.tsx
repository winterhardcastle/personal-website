/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 elektra_steam_knob.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ElektraSteamKnob(props:any) {
  const { nodes, materials } = useGLTF('/elektra_steam_knob.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.08, 8.06, 0]} rotation={[-1.09, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Body1.geometry} material={materials['Phenolic (Amber)']} position={[0, -11.91, 6.17]} scale={1} />
      </group>
      <pointLight intensity={1} decay={2} color="#fcfcfc" position={[-12.44, 12.49, 15.73]} />
    </group>
  )
}

useGLTF.preload('/elektra_steam_knob.gltf')
