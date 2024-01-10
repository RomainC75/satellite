import { useGLTF } from "@react-three/drei";
import rockScene from "../assets/3d/moon_rock.glb";

interface IRockProps {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  isRotating: boolean;
  setIsRotating: (isRotating: boolean) => void;
}

const Rock = (props: IRockProps) => {
  const { nodes, materials } = useGLTF(rockScene)
  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.MoonRock2}
        // position={[-2.3, -15.27, -38.2]}
        // scale
      />
    </group>
  );
}

// useGLTF.preload("/moon_rock_2.glb");
export default Rock;
