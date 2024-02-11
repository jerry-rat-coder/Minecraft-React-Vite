import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'
import { useMemo } from 'react'
import { useImages } from './useImages';

export const useTextures = () => {
  const { trueImages: images } = useImages();

  const textures = useMemo(() => {
    const loader = new TextureLoader();
    const textures: Record<string, any> = {};
    Object.entries(images).forEach(([k, v]) => {
      const key = `${k}Texture`;
      textures[key] = loader.load(v);
      textures[key].magFilter = NearestFilter;
    })
    textures['groundTexture'] = loader.load(images.grass);
    textures['groundTexture'].magFilter = NearestFilter;
    textures['groundTexture'].wrapS = RepeatWrapping;
    textures['groundTexture'].wrapT = RepeatWrapping;

    return textures;
  }, [images]);

  return { textures };

}