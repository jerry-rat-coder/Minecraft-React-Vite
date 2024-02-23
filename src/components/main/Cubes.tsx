import { useMinecraft } from "../../hooks/useMinecraft";
import Cube from "./Cube";

const Cubes = () => {
  const { cubes } = useMinecraft();
  return (
    <>
      {cubes.map(({ key, position, texture }) => (
        <Cube key={key} position={position} textureName={texture} />
      ))}
    </>
  );
};

export default Cubes;
