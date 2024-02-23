import { create } from "zustand";

interface IUseUpload {
  imgUrl: string;
  setImg: (url: string) => void;
}

const useUpload = create<IUseUpload>((set) => ({
  imgUrl:
    "https://res.cloudinary.com/dtzi3qstg/image/upload/v1708697623/ubsjspf93uvxima0ln7e.jpg",
  setImg: (url) => {
    set({
      imgUrl: url,
    });
  },
}));

export { useUpload };
