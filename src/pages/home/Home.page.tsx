import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Loader from "../../components/Loader";
import Infos from "../../components/Infos";
import Satellite from "../../models/Satellite";
import Galaxy from "../../models/Galaxy";
import ApolloSample from "../../models/ApolloSample";
import StationA12 from "../../models/StationA12";
import { useControls } from "leva";
import type * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";
import StarsAnimation from "../../models/StarsAnimation";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const lightRef = useRef();
  const satelliteGroupeRef = useRef<THREE.Group>();

  const adjustRockForScreenSize = (): [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ] => {
    let screenScale: [number, number, number] | null = null;

    const screenPosition: [number, number, number] = [0, 0, -43];
    const rotation: [number, number, number] = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [10, 10, 10];
    } else {
      screenScale = [10, 10, 10];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustRockForScreenSize();

    const {
      light1Intensity,
      light1Position,
      light2Intensity,
      light2Position,
      light3Intensity,
      light3Position,
    } = useControls({
      light1Position: {
        value: [-2, 18, -5],
        step: 0.1,
        min: -40,
        max: 40,
      },
      light1Intensity: {
        value: 900,
        step: 0.1,
        min: 0,
        max: 1000,
      },
      light2Position: {
        value: [3, -3, 2.2],
        step: 0.1,
        min: -40,
        max: 40,
      },
      light2Intensity: {
        value: 50,
        step: 0.1,
        min: 0,
        max: 25,
      },
      light3Position: {
        value: [6,9,-7],
        step: 0.1,
        min: -40,
        max: 40,
      },
      light3Intensity: {
        value: 50,
        step: 0.1,
        min: 0,
        max: 40,
      },
    });

    


  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 2000, position: [0, 0, 12] }}
        style={{ background: "#000000" }}
        shadows
      >

        <Infos />

        <Suspense fallback={<Loader />}>
          <ambientLight intensity={5} />
          <pointLight position={light1Position} intensity={light1Intensity} color={"#FFECA6"}/>
          // 5,15,-5 // 1000
          // -2, 18, 10 // 1000
          <pointLight position={light2Position} intensity={light2Intensity} color={"white"}/>

          <pointLight position={light3Position} intensity={light3Intensity} color={"#A6EBFF"}/>
          
          {/* <directionalLight position={lightPosition} rotation={lightDirection} intensity={lightIntensity}/> */}
          {/* <hemisphereLight skyColor="#ffffff" groundColor="#000000" intensity={1}/> */}

          
          <Galaxy/>
          {/* <ApolloSample position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}/> */}
          <StationA12 position={[0, 0, 0]} scale={[1.2,1.2,1.2]} rotation={[0.5, 0, 0]}/>
          <StarsAnimation/>
            {/* <Sky rayleigh={0.0001}/> */}
          <Satellite/>

        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
