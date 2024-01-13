import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const StarsAnimation = () => {
  const starsRef = useRef();

    useFrame((_, delta) => {
        starsRef.current.rotation.z += 0.005 * delta;
      })
  return (
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} ref={starsRef}/>
  )
}

export default StarsAnimation