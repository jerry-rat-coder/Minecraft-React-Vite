import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useTextures } from "../../hooks/useTextures";

const SPEED = 4;
const JUMP = 4;
const look = 3;

const Player = () => {
  const { textures } = useTextures();
  const { actions } = useKeyboard();
  const { camera } = useThree();
  const [ref, api] = useSphere<Mesh>(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 2, 0],
  }));

  const pos = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((position) => {
      pos.current = position;
    });
  });

  const vel = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((velocity) => {
      vel.current = velocity;
    });
  });

  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );

    // camera.position.set(0, 10, 0);

    const frontDirectionVel = new Vector3(0, 0, 0);
    if (actions.moveForward) {
      frontDirectionVel.setZ(-1);
    } else if (actions.moveBackward) {
      frontDirectionVel.setZ(1);
    }
    const sideDirectionVel = new Vector3(0, 0, 0);
    if (actions.moveRight) {
      sideDirectionVel.setX(1);
    } else if (actions.moveLeft) {
      sideDirectionVel.setX(-1);
    }

    const finalVel = new Vector3();
    finalVel.addVectors(frontDirectionVel, sideDirectionVel);
    finalVel.multiplyScalar(SPEED);
    finalVel.applyEuler(camera.rotation);
    api.velocity.set(finalVel.x, vel.current[1], finalVel.z);

    if (actions.flying) {
      api.applyForce([0, 9.8, 0], [0, 0, 0]);

      const newYVelocity = actions.jump ? JUMP : actions.desc ? -JUMP : 0;
      api.velocity.set(finalVel.x, newYVelocity, finalVel.z);
      return;
    }

    api.velocity.set(finalVel.x, vel.current[1], finalVel.z);

    if (actions.jump && Math.abs(vel.current[1]) < 0.001) {
      api.velocity.set(vel.current[0], JUMP, vel.current[2]);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry />
      {/* <sphereBufferGeometry /> */}
      <meshStandardMaterial attach="material" map={textures.ziTexture} />
    </mesh>
  );
};

export default Player;
