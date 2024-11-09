import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { ShaderMaterial } from 'three';
import { View } from 'react-native';
import * as THREE from 'three';

extend({ ShaderMaterial });

// Shader personalizado para suavizar la textura de Venus
const VenusShaderMaterial = {
  uniforms: {
    u_time: { value: 0.0 },
    u_color1: { value: new THREE.Color('#D4A373') }, // Color de base de Venus
    u_color2: { value: new THREE.Color('#A26739') }, // Color de las nubes
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float u_time;
    uniform vec3 u_color1;
    uniform vec3 u_color2;
    varying vec2 vUv;

    float random(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vec2 pos = vUv * 3.0 + u_time * 0.05;
      float n = noise(pos);
      vec3 color = mix(u_color1, u_color2, n);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

const RotatingVenus = () => {
  const venusRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (venusRef.current) {
      venusRef.current.rotation.y += 0.002; // Rotación lenta en el eje Y
    }
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={venusRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <shaderMaterial ref={materialRef} attach="material" args={[VenusShaderMaterial]} />
    </mesh>
  );
};

const Model3D = () => {
  return (
    <View style={{ width: '80%', height: '30%', alignSelf: 'center' }}>
      <Canvas>
        {/* Luz ambiental suave para iluminar la esfera uniformemente */}
        <ambientLight intensity={0.3} color="#ffffff" />

        {/* Luz principal suave para simular la luz solar */}
        <directionalLight position={[3, 2, 5]} intensity={0.7} color="orange" castShadow />

        {/* Luz de relleno para dar profundidad y suavizar sombras */}
        <pointLight position={[-5, -5, -5]} intensity={0.2} color="lightyellow" />

        <RotatingVenus />
      </Canvas>
    </View>
  );
};

export default Model3D;
