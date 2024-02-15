import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={4}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={3.5}>
        <boxGeometry args={[1,1]}/>
        <meshStandardMaterial
          color="#b927c3"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          map={decal} // Use texture prop directly in meshStandardMaterial
          attach="material" // added for clarity
        />
      </mesh>
    </Float>
  );
}

class BallCanvas extends React.Component {
  render() {
    return (
      <Canvas
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false}/>
          <Ball imgUrl={this.props.icon}/>
        </Suspense>
        <Preload all />
      </Canvas>
    );
  }
}

export default BallCanvas;
