import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from '../Loader';

// import * as THREE from "three";
// import { Canvas } from '@react-three/fiber';
// import { useEffect, useRef } from "react";
// import { OrbitControls, Preload, useGLTF } from "react";

const Handball = () => {
  const handball = useGLTF("./handball_1964/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} />
      {/* <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive
        object={handball.scene}
        scale={0.1}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const Welcome = () => {
  return (
    // <Canvas>
    //   <Suspense>
    //     <OrbitControls
    //       autoRotate
    //       enableZoom={false}
    //       maxPolarAngle={Math.PI / 2}
    //       minPolarAngle={Math.PI / 2}
    //     />

    //     <Handball />
    //   </Suspense>
    // </Canvas>
    // <div>Welcome</div>
    <div style={{width: "100vw", aspectRatio: 16/6}}>
    <Canvas
      className="canvas"
      shadows
      frameloop="demand"
      gl={{
        preserveDrawingBuffer: true
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 8],
      }}
    >
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Handball />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default Welcome;

// "Handball 1964" (https://skfb.ly/o6XX6) by urheilumuseo is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
