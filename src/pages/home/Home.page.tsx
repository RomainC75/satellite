import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../../components/Loader";
import Infos from "../../components/Infos";
import Rock from "../../models/Rock";
import Satellite from "../../models/Satellite";
import { RockDetails } from "../../models/RockDetails";
import Sky from "../../models/Stars";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustRockForScreenSize = (): [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ] => {
    let screenScale: [number, number, number] | null = null;

    const screenPosition: [number, number, number] = [0, 0, -43];
    const rotation: [number, number, number] = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [5, 5, 5];
    } else {
      screenScale = [7, 7, 7];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustRockForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 2000 }}
        // style={{ background: "#000000" }}
      >
        <Infos />

        <Suspense fallback={<Loader />}>
          <ambientLight intensity={5} />
          {/* <spotLight position={[10, 15, 20]} angle={0.3}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/> */}

          <Satellite position={[2, 2, 2]} isRotating={true} />
          <Sky />
          <Rock
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            // currentStage={currentStage}
            // setCurrentStage={setCurrentStage}
          />
          {/* <RockDetails
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            // isRotating={isRotating}
            // setIsRotating={setIsRotating}
            // currentStage={currentStage}
            // setCurrentStage={setCurrentStage}
          /> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
