import { create } from "zustand";

interface GroundProps {
  groundTexture: string
  setGroundTexture: (t: string) => void
}

export const useGround = create<GroundProps>((set) => ({
 groundTexture: 'grass',
 setGroundTexture: (texture: string) => {
  set(() => ({
    groundTexture: texture
  }))
 } 
}))