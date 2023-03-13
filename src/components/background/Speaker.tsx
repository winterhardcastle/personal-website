/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export function Speaker(props: any) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[1.6, 3, -1]} rotation={[-1, 0, 0]} scale={0.0025}>
        <mesh geometry={nodes.Box.geometry} material={materials['ABS (White) (1)']} scale={10} />
        <mesh geometry={nodes.Logo.geometry} material={materials['Steel - Satin']} scale={10} />
        <mesh geometry={nodes.Vent_Tube.geometry} material={materials['Aluminum nitride (AlN)']} scale={10} />
        <mesh geometry={nodes['Front_Panel_(1)'].geometry} material={materials['3D Mahogany - Unfinished']} scale={10} />
        <mesh geometry={nodes.Terminal.geometry} material={materials['ABS (White)']} scale={10} />
        <mesh geometry={nodes.Box_Top.geometry} material={materials['ABS (White) (1)']} scale={10} />
        <mesh geometry={nodes.Handle.geometry} material={materials['Titanium - Polished']} scale={10} />
      </group>
      
    </group>
  )
}

useGLTF.preload('/scene.gltf')
