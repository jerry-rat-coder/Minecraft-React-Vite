import { useBox } from "@react-three/cannon";
import { Mesh } from "three";
// import { dirtTexture } from "../images/textures";
import { ThreeEvent } from "@react-three/fiber";
import { useMinecraft } from "../hooks/useMinecraft";
import { useState } from "react";
import { useTextures } from "../hooks/useTextures";

interface ICube {
  position: [number, number, number],
  textureName: string
}

const Cube: React.FC<ICube> = ({
  position,
  textureName
}) => {
  const { textures } = useTextures();

  const [isHovered, setIsHovered] = useState(false);

  const { addCube, removeCube } = useMinecraft();
  const texture = textures[`${textureName}Texture` as keyof typeof textures];
  const [ref] = useBox<Mesh>(() => ({
    type: 'Static',
    position
  }))

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    
    // console.log(ref.current);
    if(ref.current && ref.current.position) {
      const { x, y, z } = ref.current.position;
      const clickedFace = Math.floor(e.faceIndex! / 2);
      // console.log(e.faceIndex, clickedFace); 

      if(e.altKey) {
        console.log('remove');
        removeCube(x, y, z);
        return;
      }
      
      const xx = [x + 1, x - 1, x, x, x, x];
      const yy = [y, y, y + 1, y - 1, y, y];
      const zz = [z, z, z, z, z + 1, z - 1];

      addCube(xx[clickedFace], yy[clickedFace], zz[clickedFace]);
    }
  }
  // console.log(typeof textures);
  return ( 
    <mesh 
      ref={ref}
      onClick={handleClick}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      >
      <boxGeometry />
      <meshStandardMaterial 
        color={isHovered ? 'grey' : 'white'}
        map={texture} 
        attach='material' 
        opacity={textureName === 'glass' ? 0.6 : 1} 
        transparent={true} 
      />
    </mesh>
   );
}
 
export default Cube;