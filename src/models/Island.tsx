import React, { useRef, useEffect, useMemo } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

//@ts-ignore
import islandScene from "../assets/3d/spaceIslandl.glb";

const Island = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  setIsZoomed,
  ...props
}: any) => {
  //@ts-ignore
  const { nodes, materials, animations } = useGLTF(islandScene);
  nodes.Leaves_Tree_0.material.transparent = true;
  nodes.Leaves_Tree_0.material.opacity = 0.9;
  nodes.Leaves_Tree_0.material.depthWrite = true;
  const islandRef = useRef<any>();

  const { gl, viewport } = useThree();
  const { actions } = useAnimations<any>(animations, islandRef);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.clientX || e.touches?.[0]?.clientX;
    if (!clientX) return;
    lastX.current = clientX;
  };

  const handlePointerUp = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    if (!isRotating) return;

    // If rotation is enabled, calculate the change in clientX position
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    // calculate the change in the horizontal position of the mouse cursor or touch input,
    // relative to the viewport's width
    const delta = (clientX - lastX.current) / viewport.width;

    // Update the island's rotation based on the mouse/touch movement
    islandRef.current.rotation.y += delta * 0.01 * Math.PI;

    // Update the reference for the last clientX position
    lastX.current = clientX;

    // Update the rotation speed
    rotationSpeed.current = delta * 0.01 * Math.PI;
  };

  const handleKeyDown = (e: any) => {
    console.log(e.key);
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.00125;
    }
    if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.00125;
    }
  };

  const handleKeyUp = (e: any) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
      rotationSpeed.current = 0;
    }
  };

  useFrame(() => {
    if (!islandRef.current) return;
    console.log(actions)
    actions["Scene"]!.play();
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.0001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 2.8 && normalizedRotation <= 3.2:
          setCurrentStage(4);
          setIsZoomed(true)
          //contact
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(2); // about
          setIsZoomed(true)
          break;
        case normalizedRotation >= 3.96 && normalizedRotation <= 4.56:
          setCurrentStage(3);
          setIsZoomed(true)
          // projects
          break;
        case normalizedRotation >= 0 && normalizedRotation <= 0.29 || normalizedRotation >= 6.1 && normalizedRotation <= 6.28:
          setCurrentStage(1); //welcome
          setIsZoomed(false);
          break;
        default:
          setCurrentStage(null);
          setIsZoomed(false)
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    //desktop
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointerdown", handlePointerDown);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    //mobile
    canvas.addEventListener("touchmove", handlePointerMove);
    canvas.addEventListener("touchend", handlePointerUp);
    canvas.addEventListener("touchstart", handlePointerDown);

    return () => {
      //desktop
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointerdown", handlePointerDown);

      canvas.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("keyup", handleKeyUp);

      //mobile
      canvas.removeEventListener("touchmove", handlePointerMove);
      canvas.removeEventListener("touchend", handlePointerUp);
      canvas.removeEventListener("touchstart", handlePointerDown);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleKeyDown,
    handleKeyUp,
  ]);

  return (
    <a.group ref={islandRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.00333333}
        >
          <group
            name="54532df5623845c1a999f7c3f0f401d4fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Stones"
                  position={[0, -54.31753922, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Stones_Stones_0"
                    geometry={nodes.Stones_Stones_0.geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Tree"
                  position={[0, 363.09884644, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Tree_Tree_0"
                    geometry={nodes.Tree_Tree_0.geometry}
                    material={materials.Tree}
                  />
                </group>
                <group
                  name="Leaves"
                  position={[88.93370819, 0, -51.09505463]}
                  rotation={[-Math.PI / 2, -0.01312148, 0]}
                  scale={95}
                >
                  <mesh
                  castShadow
                  receiveShadow
                    renderOrder={2}
                    name="Leaves_Tree_0"
                    geometry={nodes.Leaves_Tree_0.geometry}
                    material={materials.Tree}
                  />
                </group>
                <group
                  name="Bushes"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Bushes_Bush_0"
                    geometry={nodes.Bushes_Bush_0.geometry}
                    material={materials.Bush}
                  />
                  <mesh
                    name="Bushes_Tree_0"
                    geometry={nodes.Bushes_Tree_0.geometry}
                    material={materials.Tree}
                  />
                </group>
                <group
                  name="Ground"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Ground_Grond_0"
                    geometry={nodes.Ground_Grond_0.geometry}
                    material={materials.Grond}
                  />
                </group>
                <group name="Water" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Water_Water_0"
                    geometry={nodes.Water_Water_0.geometry}
                    material={materials.Water}
                  />
                </group>
                <group
                  name="Leaves_bollen"
                  position={[731.08917236, 1289.8157959, -704.34326172]}
                  rotation={[-Math.PI / 2, 0.17072458, 6e-8]}
                  scale={80}
                >
                  <mesh
                  renderOrder={1}
                    name="Leaves_bollen_Tree_0"
                    geometry={nodes.Leaves_bollen_Tree_0.geometry}
                    material={materials.Tree}
                  />
                </group>
                <group
                  name="Fence"
                  position={[-1190.33874512, -103.8502121, 178.39723206]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Fence_Tree_0"
                    geometry={nodes.Fence_Tree_0.geometry}
                    material={materials.Tree}
                  />
                </group>
                <group
                  name="Woosh_01"
                  position={[-2.47654915, 443.30349731, -1296.75219727]}
                  rotation={[Math.PI, 0, 0]}
                  scale={465.44256592}
                />
                <group
                  name="Woosh_02"
                  position={[-2.47654915, 443.30349731, -1249.20214844]}
                  rotation={[4e-8, 3.3e-7, -Math.PI]}
                  scale={465.44256592}
                />
                <group
                  name="Fish"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={10}
                />
                <group
                  name="Armature"
                  position={[-414.12457275, 147.62776184, 502.31781006]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_25">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_28"
                      geometry={nodes.Object_28.geometry}
                      material={materials.Woosh}
                      skeleton={nodes.Object_28.skeleton}
                    />
                    <skinnedMesh
                      name="Object_30"
                      geometry={nodes.Object_30.geometry}
                      material={materials["Woosh.012"]}
                      skeleton={nodes.Object_30.skeleton}
                    />
                    <skinnedMesh
                      name="Object_32"
                      geometry={nodes.Object_32.geometry}
                      material={materials["Water.001"]}
                      skeleton={nodes.Object_32.skeleton}
                    />
                    <group
                      name="Object_27"
                      position={[-2.47653934, 443.30351657, -1296.7522736]}
                      rotation={[Math.PI, 0, 0]}
                      scale={[465.44259534, 465.44259533, 465.44263312]}
                    />
                    <group
                      name="Object_29"
                      position={[-2.47653928, 443.30351397, -1249.20225566]}
                      rotation={[4e-8, 3.3e-7, Math.PI]}
                      scale={[465.44259534, 465.44259533, 465.44263312]}
                    />
                    <group
                      name="Object_31"
                      position={[0.00000146, -0.00001167, 0.00003448]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={[100.00000695, 100.00001526, 100.00000695]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Island;
