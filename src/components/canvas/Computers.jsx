import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useDeviceType, DevicesTypes } from "../../utils/devicesTypes";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const { isMobile } = useDeviceType(); // Use this hook to get the device type

  if (isMobile) {
     // Render a local image as a placeholder when the device is mobile
     return (
       <div className="w-full h-full flex justify-center items-center">
        <img src="/src/assets/computer.png" alt="Modelo 3D indisponível" className="max-w-full max-h-full scale-75 translate-y-1/4" />
       </div>
     );
  }
  return (
     <Canvas
       frameloop='demand'
       shadows
       dpr={[1, 2]}
       camera={{ position: [20, 3, 5], fov: 25 }}
       gl={{ preserveDrawingBuffer: true }}
     >
       <Suspense fallback={<CanvasLoader/>}>
         {!isMobile && <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />}
         {/* Render the computers component just when is not mobile */}
         {!isMobile && <Computers />}
       </Suspense>
 
       <Preload all />
     </Canvas>
  );
 };
 
 export default ComputersCanvas;