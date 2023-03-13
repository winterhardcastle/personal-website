/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 film_canister.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function FilmCanister(props:any) {
  const { nodes, materials } = useGLTF('/film_canister.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-1.5, 1.9, -1]} rotation={[200, 0, 90 ]} scale={.008}>
        <mesh geometry={nodes.Case.geometry} material={materials['Stainless Steel - Polished']} scale={10} />
        <mesh geometry={nodes.Lid.geometry} material={materials['Coating - Black Oxide']} scale={[9.92, 9.98, 10]} />
        <mesh geometry={nodes.Knob.geometry} material={materials['Titanium - Polished']} scale={10} />
      </group>
      <pointLight intensity={1} decay={2} position={[-12.44, 12.49, 15.73]} />
    </group>
  )
}

useGLTF.preload('/film_canister.gltf')
