
import { create } from "zustand";

interface IUseUpload {
  imgUrl: string,
  setImg: (url: string) => void
}

const useUpload = create<IUseUpload>((set) => ({
  imgUrl: '/src/images/zi.jpg',
  setImg: (url) => {
    set({
      imgUrl: url
    })
  }
}))

export { useUpload };