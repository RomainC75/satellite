import { RigidBody } from '@react-three/rapier'
import React from 'react'


const Ball = () => {

  return (
    <RigidBody>
        <mesh>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="red" />
        </mesh>
    </RigidBody>
  )
}

export default Ball