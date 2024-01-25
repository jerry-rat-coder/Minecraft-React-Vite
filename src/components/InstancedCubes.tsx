import React, { useRef, useMemo, useEffect } from 'react';
import { InstancedMesh, Object3D, BoxGeometry, MeshStandardMaterial } from 'three';
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';
import { useMinecraft } from '../hooks/useMinecraft';
import * as textures from '../images/textures'


const InstancedCubes = () => {
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const { ground } = useMinecraft();

  // const texture = useLoader(TextureLoader, '/path/to/your/texture.jpg');
  const texture = textures[`dirtTexture` as keyof typeof textures];

  const cubeGeometry = useMemo(() => new BoxGeometry(1, 1, 1), []);
  const cubeMaterial = useMemo(() => new MeshStandardMaterial({ map: texture }), [texture]);

  useEffect(() => {
    if (meshRef.current) {
      ground.forEach((cube, i) => {
        const [x, y, z] = cube.position;
        dummy.position.set(x, y, z);
        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [ground, dummy]);

  return (
    <instancedMesh ref={meshRef} args={[cubeGeometry, cubeMaterial, ground.length]}>
      <primitive attach="geometry" object={cubeGeometry} />
      <primitive attach="material" object={cubeMaterial} />
    </instancedMesh>
  );
};

export default InstancedCubes;
