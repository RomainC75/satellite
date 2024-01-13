import React, { useEffect, useRef } from 'react'

import satelliteScene from '../assets/3d/satellite.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Satellite = ({ ...props}) => {
    const ref = useRef()    
    const { scene, animations } = useGLTF(satelliteScene);
    const {actions} = useAnimations(animations, ref);

    // useEffect(()=>{
    //     console.log("=<><", isRotating)
    //     if(isRotating){
    //         actions['Take 001'].play();
    //     }else {
    //         actions['Take 001'].stop();
    //     }
    // }, [actions, isRotating])

    useFrame((state, delta) => {
      const elapsedTime = state.clock.elapsedTime
      const ROTATION_SPEED = 2
      ref.current.rotation.y += 0.03 * delta;
      ref.current.position.x = 8 * Math.sin(elapsedTime/ROTATION_SPEED);
      ref.current.position.y = 8 * Math.cos(elapsedTime/ROTATION_SPEED);
      ref.current.position.z = -1.5 * Math.sin(elapsedTime/ROTATION_SPEED);
    })

  return (
    <mesh {...props} ref={ref} >
        <primitive object={scene} />
        <meshStandardMaterial metalness={1}/>
    </mesh>
  )
}

export default Satellite