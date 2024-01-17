import React, { useEffect, useRef } from 'react'

import { useAnimations, useGLTF } from "@react-three/drei";

//@ts-ignore
import spaceship from '../assets/3d/spaceship.glb';

const Spaceship = ({ isRotating, ...props }:any) => {
    const ref = useRef<any>();
    // @ts-ignore
    const {scene, animations} = useGLTF(spaceship);
    const { actions } = useAnimations<any>(animations, ref);

    useEffect(() => {
        if(!actions) return;
        if(isRotating) actions["FLY"]!.play();
        else actions["FLY"]!.stop();
    }, [isRotating]);

  return (
    <mesh { ...props } ref={ref}> 
        <primitive object={scene} />
    </mesh>
  )
}

export default Spaceship