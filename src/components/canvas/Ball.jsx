import React, {Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
} from '@react-three/drei';
import { useDeviceType } from '../../utils/devicesTypes';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.75}>
      <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#7c3aed"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[ 2* Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
};

const BallCanvas = ({ icon }) => {
  const { isMobile } = useDeviceType();

  if (isMobile) {
    // Render a local image as a placeholder when the device is mobile
    return (
      <div className="
        w-full
        h-full
        flex
        justify-center
        items-center
        bg-gradient-to-r
        from-green-500
        via-purple-500
        to-pink-500
        p-[2px]
        rounded-[20px]
        shadow-card
        rounded-full">
       <div className="w-full h-full flex justify-center items-center rounded-full bg-indigo-800 overflow-hidden">
          <img src={icon} alt="Imagem da tecnologia" className="max-w-full max-h-full rounded-full" />
       </div>
      </div>
    );
 }
  return (
    <Canvas
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
      />
      <Ball imgUrl={icon} />
    </Suspense>

    <Preload all />
  </Canvas>
  )
};

export default BallCanvas;