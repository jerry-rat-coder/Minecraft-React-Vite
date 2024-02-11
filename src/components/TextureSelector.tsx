import { useEffect, useState } from "react";
import { useMinecraft } from "../hooks/useMinecraft";
import { useKeyboard } from "../hooks/useKeyboard";
import { useImages } from "../hooks/useImages";
const TextureSelector = () => {

  const [visible, setVisible] = useState(false);
  const [activeTexture, setActiveTexture] = useMinecraft((state) => [
    state.texture,
    state.setTexture
  ])
  const { trueImages } = useImages();

  const { actions } = useKeyboard();


  useEffect(() => {
    const { dirt, grass, glass, log, wood, zi } = actions;
    const textures = { dirt, grass, glass, log, wood, zi };

    const pressTexture = Object.entries(textures).find(([, v]) => v);
    if(pressTexture) {
      setActiveTexture(pressTexture[0]);
    }
  },[setActiveTexture, actions])
  
  useEffect(() => {
    const visibleTimer = setTimeout(() => {
      setVisible(false);
    }, 3000)
    setVisible(true);

    return () => {
      clearTimeout(visibleTimer);
    }
  }, [activeTexture]);
  return ( 
    visible && (
    <div className="fixed left-[50%] top-[75%] translate-x-[-50%] scale-[5]">
      {
        Object.entries(trueImages).map(([k, src]) => (
          <img 
            key={k}
            src={src}
            alt={k}
            width={16}
            height={16}
            className={
              `${k === activeTexture && ' border-2 border-red-500 border-solid'} inline-block`
            }
          />
        ))
      }
    </div> 
    ) 
  );
}
 
export default TextureSelector;