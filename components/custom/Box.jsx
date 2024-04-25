'use client'
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { createRoot } from 'react-dom/client';
import { useGLTF, OrthographicCamera, Environment, Text, MeshTransmissionMaterial } from '@react-three/drei';
import { useControls } from 'leva';

export function Model(props) {
  const { nodes, materials } = useGLTF('/untitled.gltf');
  const { viewport } = useThree();
  const scaleFactor = viewport.width / 2000;

  const { mouse, raycaster, camera } = useThree(); // Destructure camera from useThree
  const mesh = useRef();
  const [isHovered, setIsHovered] = useState(false);
  
//   // Update raycaster
//   useEffect(() => {
//     raycaster.setFromCamera(mouse, camera); // Use the camera from useThree
//   }, [mouse, raycaster, camera]); // Include camera in the dependency array

//   // Check for intersections
//   useFrame(() => {
//     const intersects = raycaster.intersectObjects([mesh.current]);
//     if (intersects.length > 0) {
//       setIsHovered(true);
//     } else {
//       setIsHovered(false);
//     }
//   });

//   useEffect(() => {
//     if (isHovered) {
//         mesh.current.rotation.y += 1.08
//     }
//   }, [isHovered, mouse]);

//   const { mouse } = useThree();
//   const initialMousePosition = { x: 0, y: 0 };
//   const [prevMousePosition, setPrevMousePosition] = useState(initialMousePosition);

//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     const mouseX = (clientX / window.innerWidth) * 2 - 1;
//     const mouseY = -(clientY / window.innerHeight) * 2 + 1;
//     setPrevMousePosition({ x: mouseX, y: mouseY });
//   };
//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);
  useFrame( () => {

    mesh.current.rotation.y += 0.02
    mesh.current.rotation.x += 0.01
  })
  const materialProps = {
    thickness: 3,
    roughness: 0.3,
    transmission: 3,
    ior: 0,
    chromaticAberration: 0.8,
    backside: true,
  };

  const textProps = {
    thickness: 3,
    roughness: 0.3,
    transmission: 2,
    ior: 0,
    chromaticAberration: .1,
    backside: true,
  };
  return (
    <group {...props} dispose={null}>
      <Text fontSize={.5} position={[0, -2, 1.9]} font='fonts/PPNeueMontreal-Bold.otf' >
        Andrew Ransom
        <MeshTransmissionMaterial {...textProps}/>
      </Text>
      <group scale={0.006} ref={mesh}>
      <MeshTransmissionMaterial {...materialProps}/>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_5.geometry}
          material={nodes.Cylinder_5.material}
          position={[252.451, 67, 77.215]}
          rotation={[1.575, 0, 0]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={nodes.Cylinder_3.material}
          position={[93.42, -15.183, 77.408]}
          rotation={[-2.271, 1.552, 2.277]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_4.geometry}
          material={nodes.Cylinder_4.material}
          position={[278.71, -103.75, 73.201]}
          rotation={[-1.593, 1.161, 1.601]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={nodes.Cylinder_2.material}
          position={[-152.405, -18.796, 78.864]}
          rotation={[-1.593, 1.161, 1.601]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[-294.334, -13.951, 80.377]}
          rotation={[-0.051, -0.118, -0.41]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_3.geometry}
          material={nodes.Sphere_3.material}
          position={[-366.91, -182.538, 81]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_5.geometry}
          material={nodes.Sphere_5.material}
          position={[96.581, -182.538, 76.74]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_6.geometry}
          material={nodes.Sphere_6.material}
          position={[312.663, -182.538, 71.325]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2.geometry}
          material={nodes.Sphere_2.material}
          position={[-81.441, -182.538, 78.545]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_4.geometry}
          material={nodes.Sphere_4.material}
          position={[92.264, 150.179, 79.64]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[-224.492, 150.179, 81]}
        >
        <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
        <directionalLight intensity={0.7} decay={2} rotation={[-0.33, 0.57, 0.566]} />
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-50.716, -18.218, 1241.155]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/untitled.gltf');

function App() {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        createRoot(document.getElementById('root')).render(
          <div style={{ height: '50vh' }} className='flex justify-center items-center'> {/* Set canvas container height */}
            <Canvas>
              <Environment preset='city'/>
              <Model />
            </Canvas>
          </div>
        );
      }
    }, []);

  return (
    <div id="root">
      {/* Placeholder for canvas */}
    </div>
  );
}

export default App;