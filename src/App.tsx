import { PointerLockControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Ground from './components/Ground'
import { Physics } from '@react-three/cannon'
import Player from './components/Player'
// import Cube from './components/Cube'
import Cubes from './components/Cubes'
import TextureSelector from './components/TextureSelector'
import ToasterProvider from './context/ToasterProvider'
import Button from './components/Button'
import Modal from './components/modal/Modal'
import InstancedCubes from './components/InstancedCubes'
import { useModal } from './hooks/useModal'
function App() {
  const { isOpen, onClose } = useModal();

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
      <div className='
        fixed 
        top-[50%] 
        left-[50%] 
        translate-x-[-50%] 
        translate-y-[-50%]
        text-white 
        text-3xl 
        cursor-default
        '>+</div>
        <TextureSelector />
        <Button />
        <Modal isOpen={isOpen} onClose={onClose}  />
    </>
  )
}



export default App
