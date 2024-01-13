import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

import skyScene from '../assets/3d/need_some_space.glb'
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
    nodes: {
      Object_5: THREE.Mesh;
    };
    materials: {
      MoonRock2: THREE.MeshStandardMaterial;
    };
  };
  

const Galaxy = ({isRotating}) => {
    const sky = useGLTF(skyScene) as GLTFResult;
    const ref = useRef()

    useFrame((state, delta) => {
        // if(isRotating){
            ref.current.rotation.z += 0.05 * delta;

            const elapsedTime = state.clock.elapsedTime
            // const ROTATION_SPEED = 2
            // ref.current.position.x = 2 * Math.sin(elapsedTime/ROTATION_SPEED);
            // ref.current.position.y = 2 * Math.cos(elapsedTime/ROTATION_SPEED);

        // }
    })
    
  return (
    <mesh ref={ref} position={[-10,-10,-20]} scale={10}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Galaxy