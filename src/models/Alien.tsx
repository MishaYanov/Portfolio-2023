import React, { useEffect, useRef } from 'react'

import { useAnimations, useGLTF } from "@react-three/drei";
//@ts-ignore
import alienScene from '../assets/3d/spaceshipAlien.glb';
import { useFrame } from '@react-three/fiber';

const Alien = (props:any) => {
    const alienRef = useRef<any>();
    const [isForward, setIsForward] = React.useState(true);
    // @ts-ignore
    const {scene, animations} = useGLTF(alienScene);
    const { actions } = useAnimations(animations, alienRef);
  
    useFrame(({clock, camera}, delta)=>{
      if (alienRef.current.position.x > camera.position.x + 8) {
          setIsForward(false);
        } else if (alienRef.current.position.x < camera.position.x - 8) {
          setIsForward(true);
        }
      alienRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5 + 2;
      if (isForward) {
          // Moving forward
          alienRef.current.position.x += 0.5 * delta;
          alienRef.current.position.z -= 0.2 * delta;
        } else {
          // Moving backward
          alienRef.current.position.x -= 0.5 * delta;
          alienRef.current.position.z += 0.2 * delta;
        }
    })
    return (
      <mesh position={[-4, 1, 0]} scale={[0.003, 0.003, 0.003]} rotation={[0.5, 1, 0]} ref={alienRef}>
          <primitive object={scene} />    
      </mesh>
    )
  }
  
  export default Alien