/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Space(props) {
  const { nodes, materials } = useGLTF('/public/spa.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.InternationalSpaceStation_mesh.geometry}
        material={materials.InternationalSpaceStation_mat}
      />
    </group>
  )
}

useGLTF.preload('/public/spa.glb')

