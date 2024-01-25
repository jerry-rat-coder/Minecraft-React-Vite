import { nanoid } from "nanoid";
import { create } from "zustand";

const getLocalstorage = (key: string) => {
  const val = window.localStorage.getItem(key);
  if (val?.length) {
    return JSON.parse(val);
  }
}

const setLocalstorage = (key: string, val: any) => window.localStorage.setItem(key, JSON.stringify(val));

interface MinecraftStore {
  texture: string,
  cubes: any[],
  ground: any[],
  addCube: (x: number, y: number, z: number) => void,
  setTexture: (name: string) => void,
  removeCube: (x: number, y: number, z: number) => void,
  resetWorld: () => void,
  saveWorld: () => void
}

const init = (count: number) => {
  let res: any[] = [];

  for (let i = -count; i < count; ++i) {
    for (let j = -count; j < count; ++j) {
      if (i === 1 && j === 0) continue;
      if (i === 1 && j === 1) continue;
      if (i === 1 && j === -1) continue;
      if (i === 0 && j === 1) continue;
      if (i === 0 && j === 0) continue;
      if (i === 0 && j === -1) continue;
      if (i === -1 && j === 0) continue;
      if (i === -1 && j === 1) continue;
      if (i === -1 && j === -1) continue;
      res = [...res, {
        key: nanoid(),
        position: [i, 0, j],
        texture: 'dirt'
      }]
    }
  }
  return res;
}


export const useMinecraft = create<MinecraftStore>((set) => ({
  texture: 'dirt',
  cubes: getLocalstorage('cubelist') || [],
  // cubes: init(50),
  ground: init(20),
  addCube: (x, y, z) => {
    set(prev => ({
      cubes: prev.cubes.concat({
        key: nanoid(),
        position: [x, y, z],
        texture: prev.texture
      })
    }))
  },
  removeCube: (x, y, z) => {
    set(prev => ({
      cubes: prev.cubes.filter(cube => {
        const [X, Y, Z] = cube.position;
        return x !== X || y !== Y || z !== Z;
      })
    }))
  },
  setTexture: (name) => {
    set(prev => ({
      texture: name
    }))
  },
  resetWorld: () => {
    set(prev => ({
      cubes: []
    }))
  },
  saveWorld: () => {
    set(prev => {
      setLocalstorage('cubelist', prev.cubes);
      return prev;
    })
  }

}))