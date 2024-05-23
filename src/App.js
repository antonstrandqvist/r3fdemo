import './App.css';
import { Canvas } from '@react-three/fiber';
import { Sphere, OrbitControls, Environment, Text3D, MeshWobbleMaterial } from '@react-three/drei';
import {Model} from './Model'

function App() {
  return (
    <div className="App">
      <Canvas>
        <Sphere position={[-2,0,0]} args={[1, 20]}>
          <MeshWobbleMaterial factor={2} speed={1} >
          <meshPhysicalMaterial color={'red'} metalness={1} reflectivity={1} envMapIntensity={1} />
          </MeshWobbleMaterial>
        </Sphere>
       <OrbitControls />
       <Text3D size={0.5} font="/inter.json"> 
        Hello world
        <meshStandardMaterial color="white" />
       </Text3D>
       <Model />
       <Environment preset='sunset' background />
      </Canvas>
    </div>
  );
}

export default App;
