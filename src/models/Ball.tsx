import { RigidBody } from '@react-three/rapier'


const Ball = () => {

  return (
    <RigidBody colliders="ball" position={[0,2,0]}>
        <mesh >
            <sphereGeometry args={[0.2,32,16]}/>
            <meshStandardMaterial color="red" />
        </mesh>
    </RigidBody>
  )
}

export default Ball