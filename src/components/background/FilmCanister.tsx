/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -t film_canister.gltf
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Case: THREE.Mesh
    Lid: THREE.Mesh
    Knob: THREE.Mesh
  }
  materials: {
    ['Stainless Steel - Polished']: THREE.MeshStandardMaterial
    ['Coating - Black Oxide']: THREE.MeshStandardMaterial
    ['Titanium - Polished']: THREE.MeshStandardMaterial
  }
}

export function FilmCanister(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/film_canister.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[1, -25, 4]} rotation={[-Math.PI / 2, 0.26, -Math.PI / 9]} scale={0.008}>
        <mesh geometry={nodes.Case.geometry} material={materials['Stainless Steel - Polished']} scale={10} />
        <mesh geometry={nodes.Lid.geometry} material={materials['Coating - Black Oxide']} scale={[9.92, 9.98, 10]} />
        <mesh geometry={nodes.Knob.geometry} material={materials['Titanium - Polished']} scale={10} />
      </group>
      <pointLight intensity={1} decay={2} position={[-12.44, 12.49, 15.73]} />
    </group>
  )
}

useGLTF.preload('/film_canister.gltf')
