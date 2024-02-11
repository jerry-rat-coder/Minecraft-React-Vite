import { usePlane } from "@react-three/cannon";
import { Mesh } from "three";
import { ThreeEvent } from "@react-three/fiber";

import { useMinecraft } from "../hooks/useMinecraft";
import { useTextures } from "../hooks/useTextures";

const Ground = () => {
  const { addCube } = useMinecraft();

  const { textures } = useTextures();

  const groundTexture = textures['groundTexture'];
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
  }))

  groundTexture.repeat.set(100, 100);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    // console.log(e.point);
    const [x, y, z] = Object.values(e.point).map(pos => Math.ceil(pos));
    addCube(x, y, z);
  }
  return ( 
    <mesh 
      ref={ref}
      onClick={handleClick}
    >
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
   );
}
 
export default Ground;