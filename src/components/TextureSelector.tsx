import { useEffect, useState } from "react";
import { useMinecraft } from "../hooks/useMinecraft";
import { useKeyboard } from "../hooks/useKeyboard";
import {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from '../images/images'

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg
}

const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setActiveTexture] = useMinecraft((state) => [
    state.texture,
    state.setTexture
  ])

  const { actions } = useKeyboard();

  useEffect(() => {
    const textures = {
      dirt: actions.dirt,
      grass: actions.grass,
      glass: actions.glass,
      wood: actions.wood,
      log: actions.log
    }

    const pressTexture = Object.entries(textures).find(([k, v]) => v);
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
        Object.entries(images).map(([k, src]) => (
          <img 
            key={k}
            src={src}
            alt={k}
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