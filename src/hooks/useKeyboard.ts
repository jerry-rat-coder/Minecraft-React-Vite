import { useEffect, useState } from "react"

const actionByKeyCode = (keyCode: string) => {
  if (keyCode === 'KeyW') {
    return 'moveForward'
  }
  if (keyCode === 'KeyS') {
    return 'moveBackward'
  }
  if (keyCode === 'KeyA') {
    return 'moveLeft'
  }
  if (keyCode === 'KeyD') {
    return 'moveRight'
  }
  if (keyCode === 'Space') {
    return 'jump'
  }
  if (keyCode === 'Digit1') {
    return 'dirt'
  }
  if (keyCode === 'Digit2') {
    return 'grass'
  }
  if (keyCode === 'Digit3') {
    return 'glass'
  }
  if (keyCode === 'Digit4') {
    return 'wood'
  }
  if (keyCode === 'Digit5') {
    return 'log'
  }
  if (keyCode === 'Digit6') {
    return 'zi'
  }
  if (keyCode === 'KeyF') {
    return 'flying'
  }
  if (keyCode === 'ShiftLeft') {
    return 'desc'
  }
  return ''
}


export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    desc: false,
    flying: false,
    dirt: false,
    glass: false,
    grass: false,
    wood: false,
    log: false,
    zi: false
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log('keydown', e.code);
    if (e.code === 'ControlLeft') {
      setActions((prev) => ({
        ...prev,
        flying: false
      }))
      return;
    }
    const action = actionByKeyCode(e.code);
    setActions((prev) => ({
      ...prev,
      [action]: true
    }))
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'KeyF') {
      return;
    }
    const action = actionByKeyCode(e.code);
    setActions((prev) => ({
      ...prev,
      [action]: false
    }))
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  })

  return {
    actions
  }
}