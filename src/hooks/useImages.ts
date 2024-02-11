import { useEffect, useState } from "react";
import { images } from "../images/images"
import { useUpload } from "./useUpload";
export const useImages = () => {
  const { imgUrl: ziImg } = useUpload();

  const [trueImages, setTureImages] = useState(images);

  useEffect(() => {
    setTureImages((pre) => ({
      ...pre,
      zi: ziImg
    }))
  }, [ziImg]);

  return {
    trueImages
  }
}