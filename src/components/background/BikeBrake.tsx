/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -t bike_brake.gltf
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Body1: THREE.Mesh
    Body1_1: THREE.Mesh
    Body1_2: THREE.Mesh
    Main_Brake_Arm: THREE.Mesh
    Secondary_Brake_Arm: THREE.Mesh
    ['318_Clamp_Clamp']: THREE.Mesh
    ['318_Clamp_Body']: THREE.Mesh
  }
  materials: {
    ['Steel - Satin']: THREE.MeshStandardMaterial
    ['Plastic - Matte (Black)']: THREE.MeshStandardMaterial
    ['Titanium - Polished']: THREE.MeshStandardMaterial
  }
}

export function BikeBrake(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/bike_brake.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[2, 1, 4]} rotation={[-1.4, 0, Math.PI / 9]} scale={0.005}>
        <group position={[-51, 6.59, 33.89]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Body1.geometry} material={materials['Steel - Satin']} scale={10} />
        </group>
        <group position={[-51, 9.78, -43.29]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Body1_2.geometry} material={materials['Steel - Satin']} scale={10} />
        </group>
        <mesh geometry={nodes.Main_Brake_Arm.geometry} material={materials['Plastic - Matte (Black)']} scale={10} />
        <mesh geometry={nodes.Secondary_Brake_Arm.geometry} material={materials['Plastic - Matte (Black)']} scale={10} />
        <mesh geometry={nodes['318_Clamp_Clamp'].geometry} material={materials['Titanium - Polished']} scale={10} />
        <mesh geometry={nodes['318_Clamp_Body'].geometry} material={materials['Titanium - Polished']} scale={10} />
        <mesh geometry={nodes.Body1_1.geometry} material={materials['Steel - Satin']} scale={10} />
      </group>
      <pointLight intensity={1} decay={2} color="#fcfcfc" position={[-12.44, 12.49, 15.73]} />
    </group>
  )
}

useGLTF.preload('/bike_brake.gltf')
