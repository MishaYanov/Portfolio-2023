import { useSpring } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const CameraManipulator = ({ isZoomed, currentStage, zoomPosition }: any) => {
  const { camera } = useThree();
  const defaultPosition = [0, 0, 5]; // Define your default camera position here

  const { pos } = useSpring({
    pos:
      isZoomed && (currentStage === 2 || currentStage === 3 || currentStage === 4)
        ? [zoomPosition.x, zoomPosition.y, zoomPosition.z]
        : currentStage === null
        ? defaultPosition
        : camera.position.toArray(),
    config: { mass: 5, tension: 200, friction: 50, precision: 0.0001 },
  });

  useFrame(() => {
    if ((isZoomed && (currentStage === 2 || currentStage === 3 || currentStage === 4)) || currentStage === null) {
      // Smoothly update the camera position
      camera.position.lerp(
        new THREE.Vector3(pos.get()[0], pos.get()[1], pos.get()[2]),
        1
      );
    }
  });

  return null; // This component doesn't render anything itself
};

export default CameraManipulator;
