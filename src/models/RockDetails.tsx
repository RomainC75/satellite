import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import rockScene from "../assets/3d/moon_rock_2_details.glb";

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh;
  };
  materials: {
    MoonRock2: THREE.MeshStandardMaterial;
  };
};

interface IRockDetailsProps {
    position: [number, number, number];
    scale: [number, number, number];
    rotation: [number, number, number];
    isRotating: boolean;
    setIsRotating: (isRotating: boolean) => void;
  }

export function RockDetails(props: IRockDetailsProps) {
  const { nodes, materials } = useGLTF(rockScene) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.MoonRock2}
        position={[-2.3, -15.27, -38.2]}
        scale={0.1}
      />
    </group>
  );
}

// useGLTF.preload("/moon_rock_2 (1).glb");
