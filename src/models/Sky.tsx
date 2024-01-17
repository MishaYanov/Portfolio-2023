import React from "react";
import { useGLTF } from "@react-three/drei";
import { ObjectMap, useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { useRef } from "react";
//@ts-ignore
import newsky from "../assets/3d/sky1.glb";

export const Sky = ({ isRotating }: any) => {
  const sky = useGLTF(newsky);
  const skyRef = useRef<any>();
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.1 * delta;
      skyRef.current.rotation.x += 0.002 * delta;
      skyRef.current.rotation.z += 0.0001 * delta;
    }
  });
  console.log(sky)

  const adjustSkyForScreenSize = () => {
    let screenScale:any = [0,0,0],
      screenPosition:any =[0,0,0],
      screenRotation:any = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, 13, -70];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, 0, 750];
    }

    return [screenScale, screenPosition, screenRotation];
  };


  const [skyScale, skyPosition, skyRotation] = adjustSkyForScreenSize();

  return (
    <mesh
      ref={skyRef}
      rotation={skyRotation}
      position={skyPosition}
      scale={skyScale}
    >
      <primitive object={(sky as GLTF & ObjectMap).scene} />
    </mesh>
  );
};
