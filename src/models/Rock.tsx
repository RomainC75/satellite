import { useGLTF } from "@react-three/drei";
import rockScene from "../assets/3d/moon_rock.glb";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface IRockProps {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  isRotating: boolean;
  setIsRotating: (isRotating: boolean) => void;
}

const Rock = (props: IRockProps) => {
  const { nodes, materials } = useGLTF(rockScene);
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.25 * delta;
    ref.current.rotation.x += 0.2 * delta;
    ref.current.rotation.z += 0.3 * delta;
  });

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.MoonRock2}
        // position={[-2.3, -15.27, -38.2]}
        // scale
      />
      <meshStandardMaterial 
        metalness={1} 
        color={"grey"} 
        opacity={1}
        transparent={false}
      />
    </group>
  );
};

// useGLTF.preload("/moon_rock_2.glb");
export default Rock;
