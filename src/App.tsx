import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./components/main/Ground";
import { Physics } from "@react-three/cannon";
import Player from "./components/main/Player";
// import Cube from './components/Cube'
import Cubes from "./components/main/Cubes";
import TextureSelector from "./components/main/TextureSelector";
import ToasterProvider from "./context/ToasterProvider";
import Menu from "./components/setting/Menu";
import HelpModal from "./components/modal/HelpModal";
// import InstancedCubes from './components/InstancedCubes'

function App() {
  // const { isOpen, onClose } = useModal();

  return (
    <>
      <ToasterProvider />
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <PointerLockControls />
        <ambientLight intensity={1.5} />
        <Physics>
          <Ground />
          <Player />
          <Cubes />
          {/* <InstancedCubes/> */}
        </Physics>
      </Canvas>
      <div
        className="
        fixed 
        top-[50%] 
        left-[50%] 
        translate-x-[-50%] 
        translate-y-[-50%]
        text-white 
        text-3xl 
        cursor-default
        "
      >
        +
      </div>
      <TextureSelector />
      <Menu />
      <HelpModal />
    </>
  );
}

export default App;
