import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Loader } from "../components";
import Island from "../models/Island";
import { Sky } from "../models/Sky";
import { HomeInfo } from "../components/HomeInfo";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import Spaceship from "../models/Spaceship";
import Alien from "../models/Alien";
import { adjust3dScreenSize } from "../logic/3dScreenSizeParser";
import { useSpring } from "@react-spring/three";
import * as THREE from 'three';
import CameraManipulator from "../components/CameraManipulator";


const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(sakura));
  audioRef.current.loop = true;
  audioRef.current.volume = 1;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0, z: -25 }); // Change these values as needed
  


  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentStage === 2) {
      if(window.innerWidth < 768) {
        setZoomPosition({ x: 1, y: -2, z: -20 })
      } else {
        setZoomPosition({ x: 0, y: 0, z: -15 })
      }
      
    } else if (currentStage === 3) {
      if(window.innerWidth < 768) {
        setZoomPosition({ x: 1, y: -2, z: -20 })
      } else {
        setZoomPosition({ x: 0, y: 1, z: -15 })
      }
    } else if (currentStage === 4) {
      if(window.innerWidth < 768) {
        setZoomPosition({ x: 1, y: -2, z: -20 })
      } else {
        setZoomPosition({ x: 0, y: 0, z: -15 })
      }
    } else {

    }
  }, [currentStage]);


  const spaceship = adjust3dScreenSize({
    screenScale: { m: [0.04, 0.04, 0.04], d: [0.1, 0.1, 0.1] },
    screenPosition: { m: [0.3, -1.8, 0], d: [0, -4, -4] },
    screenRotation: [0.15, 6.4, 0],
  });

  const island = adjust3dScreenSize({
    screenScale: { m: [2, 2, 2], d: [3, 3, 3] },
    screenPosition: { m: [0, -6.5, -43], d: [0, -4.5, -43] },
    screenRotation: [0.1, 0, 0],
  });


  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent  ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <CameraManipulator isZoomed={isZoomed} currentStage={currentStage} zoomPosition={zoomPosition} />

          <ambientLight intensity={1} />
          {/* <directionalLight intensity={2} position={[5, 1, 1]} /> */}
          <pointLight
            intensity={window.innerWidth < 768 ? 3 : 18}
            position={window.innerWidth < 768 ? [0, -1.5, 1] : [-0.5, -2, -2]}
          />
          <hemisphereLight groundColor="#000000" />
          <Sky isRotating={isRotating} />
          <Alien />
          <Island
            position={island.screenPosition}
            scale={island.screenScale}
            rotation={island.screenRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            setIsZoomed={setIsZoomed}
          />

          <Spaceship
            scale={spaceship.screenScale}
            position={spaceship.screenPosition}
            isRotating={isRotating}
            rotation={spaceship.screenRotation}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={isPlaying ? soundon : soundoff}
          alt="sound img"
          className="w-10 h-10 cursor-pointer"
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        />
      </div>
    </section>
  );
};

export default Home;
