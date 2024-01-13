import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import satelliteScene from '../assets/3d/apollo_lunar_sample_120387.glb'
import { useFrame } from "@react-three/fiber";

const ApolloSample = (props) => {
  const { nodes, materials } = useGLTF(satelliteScene);
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.25 * delta;
    ref.current.rotation.x += 0.2 * delta;
    ref.current.rotation.z += 0.3 * delta;
  });

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}


useGLTF.preload("/apollo_lunar_sample_120387.glb");
export default ApolloSample;