import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import stationScene from "../assets/3d/stationa12.glb";
import { useFrame, useThree } from "@react-three/fiber";

const StationA12 = (props) => {
  const group = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials, animations } = useGLTF(stationScene);
  const { actions } = useAnimations(animations, group);
  const [isRotating, setIsRotating] = useState(true);
  const [isPointerDown, setIsPointerDown] = useState(false);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);

  useFrame((state, delta) => {
    if (isRotating) {
      group.current.rotation.y -= 0.03 * delta;
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsRotating(false);
    setIsPointerDown(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    setIsRotating(true);
    setIsPointerDown(false);
  };

  const handlePointerMove = (e) => {
    if (isPointerDown) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      group.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="cf56a37b0a28498a861269068a0c4593fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Circle_plating_plating"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={530.699}
                >
                  <mesh
                    name="Circle_plating_plating_MAT_Metal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle_plating_plating_MAT_Metal_0.geometry}
                    material={materials.MAT_Metal}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

// useGLTF.preload("/station_-_a12.glb");
export default StationA12;
