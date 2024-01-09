import React, { useEffect, useRef } from 'react'

import satelliteScene from '../assets/3d/satellite.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Satellite = ({isRotating, ...props}) => {
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

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Satellite