import React, { useRef } from "react";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, extend } from '@react-three/fiber';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <group >
      <hemisphereLight intensity={6} groundColor="black"/>
      <pointLight intensity={2} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.75 : 1}
        position={isMobile ? [0,-4,-1] : [0, -3.5, -3]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
}

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    //Add event listen for changes in the screen size
    const mediaQuery = window.matchMedia('(max-width: 830px)');
    //Set the inital value of the isMobile state variable
    setisMobile(mediaQuery.matches);
    
    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    };
    
    //Add the callback function to handle changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI/2} // Correct casing of Math.PI
          minPolarAngle={Math.PI/2} // Correct casing of Math.PI
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
