import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { images } from '../constants';

// Generates a cylindrical carousel of images
function CarouselItems({ items, radius = 5 }) {
  const groupRef = useRef();
  const speedRef = useRef(0.2);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speedRef.current;
    }
  });

  // Calculate angles and spacing for each segment around full circle
  const segmentAngle = (2 * Math.PI) / items.length;
  const gapRatio = 0.1; // 10% gap between segments
  const thetaLength = segmentAngle * (1 - gapRatio);
  const thetaStartOffset = -thetaLength / 2;

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {items.map((src, idx) => {
        // Compute rotation angle for this segment
        const angle = segmentAngle * idx;
        return (
          <mesh
            key={idx}
            rotation={[0, angle, 0]}
            onPointerOver={() => { speedRef.current = 0.05 }}
            onPointerOut={() => { speedRef.current = 0.2 }}
          >
            {/* Curved segment of cylinder for natural curvature with gap */}
            <cylinderGeometry
              args={[
                radius,           // top radius
                radius,           // bottom radius
                5,                // adjusted height of segment to elegantly cover hero section
                32,               // radial segments for smooth curvature
                1,                // height segments
                true,             // open ended
                thetaStartOffset, // theta start
                thetaLength       // theta length (with gap)
              ]}
            />
            <meshBasicMaterial map={useLoader(TextureLoader, src)} side={2} />
          </mesh>
        );
      })}
    </group>
  );
}

const HeroCarousel3DCylinder = ({ count = 8 }) => {
  // Select random keys for images
  const keys = Object.keys(images).filter(key => /^(c|d|g|ac)\d+/.test(key));
  const shuffled = [...keys].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count).map(key => images[key]);

  return (
    <div className="w-full h-[80vh] relative flex items-center justify-center mt-16" style={{ overflow: 'visible' }}>
      <Canvas className="w-full h-full" camera={{ position: [0, 2, 14], fov: 40 }} gl={{ antialias: true }}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} enableRotate={true} />
        <CarouselItems items={selected} radius={6} />
      </Canvas>
    </div>
  );
};

export default HeroCarousel3DCylinder; 