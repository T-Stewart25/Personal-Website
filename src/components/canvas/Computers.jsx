import React from "react";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'; // Import Mesh, HemisphereLight, and PointLight components

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh> {/* Use group instead of Mesh if you're grouping multiple elements */}
      <hemisphereLight intensity={3} groundColor="black"/> {/* Capitalized HemisphereLight */}
      <pointLight intensity={2} /> {/* Capitalized PointLight */}
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
        position={isMobile? [0,-3,-2.2] : [0, -3.5, -3]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 830px)');
    setisMobile(mediaQuery.matches);
  
    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    };
  
    mediaQuery.addEventListener('change', handleMediaQueryChange);
  
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
  )
}

export default ComputersCanvas;
