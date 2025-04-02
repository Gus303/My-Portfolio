"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";

function Model() {
  const { scene } = useGLTF("/models/computer.glb"); 
  return <primitive object={scene} position={[0.121, 0.007, 0]}  />;
}

export default function ComputerContainer() {
  return (
  <motion.div
  initial={{opacity: 0}}
        animate={{opacity:1, transition: {delay:1.6, duration:0.4, ease:'easeInOut'}}}
  >
      <Canvas>
      <Suspense fallback={null}>
      <Stage  environment="apartment" intensity={0.5}>
      <Model />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
      <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  </motion.div>
  );
}
