import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import stationScene from "../assets/3d/stationa12.glb";
import { useFrame } from "@react-three/fiber";
import Satellite from "./Satellite";
import { Group } from "three";

const StationA12 = (props) => {
  const group = useRef();
  
  const { nodes, materials, animations } = useGLTF(stationScene);
  const { actions } = useAnimations(animations, group);

  useFrame((state, delta) => {
    group.current.rotation.y -= 0.03 * delta;
    
  })

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
}

// useGLTF.preload("/station_-_a12.glb");
export default StationA12;