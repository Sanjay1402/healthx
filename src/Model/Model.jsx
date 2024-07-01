"use client";
import vertex from "../shaders/vertex.glsl";
import fragment from "../shaders/fragment.glsl";

import * as THREE from "three";
import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Wireframe, useGLTF } from "@react-three/drei";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import coloredtexture from "../shaders/peakpx.jpg";
import styles from "./model.module.css";
gsap.registerPlugin(ScrollTrigger);

function Model(props) {
  const shaderMaterialRef = useRef(); // Reference to the shader material
  const { nodes } = useGLTF("/lopoly_dna.gltf");

  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      const timeValue = clock.getElapsedTime();
      const colorvalue = Math.sin(timeValue) / 2.0 + 0.7;
      const colorvalue2 = Math.sin(timeValue) / 3.0 + 0.3;
      shaderMaterialRef.current.uniforms.ourColor.value.set(
        0.0,
        colorvalue,
        colorvalue2,
        1.0
      );
    }
  });

  useFrame(() => {
    if (groupRef.current) {
      if (groupRef.current.rotation.y > -1) {
        groupRef.current.rotation.x += 0.02;
      }
      const fixedPosition = new THREE.Vector3(0, 0, 0);
      groupRef.current.position.copy(fixedPosition);
    }
  });

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0.0 },
      ourColor: { value: new THREE.Vector4(1.0, 1.0, 1.0, 1.0) },
      color4: { value: new THREE.Color(0xffffff) },
      uTexture: { value: new THREE.TextureLoader().load(coloredtexture) },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
  });

  useEffect(() => {
    if (nodes && nodes.DNA3 && nodes.DNA3.material) {
      nodes.DNA3.material = shaderMaterial; // Use custom shader material
      shaderMaterialRef.current = shaderMaterial; // Assign the ref
    }
  }, [nodes, shaderMaterial]);

  return (
    <group {...props} dispose={null} position={[0, 0, 0]} scale={47}>
      <group ref={groupRef} />
      <group ref={groupRef} {...props} dispose={null}>
        <group scale={[0.0052, 0.0052, 0.0052]}>
          <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.DNA3.geometry}
              material={shaderMaterial}
            ></mesh>
          </group>
        </group>
      </group>
    </group>
  );
}
function NewApp() {
  const imgref = useRef(null);

  useEffect(() => {
    const currentImgRef = imgref.current;
    gsap.fromTo(
      currentImgRef,
      { rotation: 0 },
      {
        rotation: 90,
        scrollTrigger: {
          trigger: currentImgRef,
          start: "top center",
          end: "bottom center",
          duration: 3,
          markers: false,
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div style={{ width: "173%", height: "173%" }}>
      <Canvas
        ref={imgref}
        style={{
          width: "112%",
          height: "93%",
        }}
        camera={{
          position: [0, 0, 10], // Adjust camera position
          near: 0.1, // Adjust near clipping plane
          far: 1000, // Adjust far clipping plane
        }}
      >
        <Suspense fallback={null}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <spotLight position={[0.5, 0.5, 1]} angle={10} penumbra={10} />
          <mesh>
            <Model position={[0, -2, 0]} /> {/* Adjust model position */}
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default NewApp;

{
  /* Mouse Control */
}
{
  /* <OrbitControls
            autoRotateSpeed={4}
            enableZoom={false}
            enablePan={true}
            target={[0, 0, 0]}
          /> */
}
