import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'
import {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
  ziImg
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(grassImg);
const ziTexture = new TextureLoader().load(ziImg);


dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
ziTexture.magFilter = NearestFilter;

groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;


// const textureMap: Record<string, typeof dirtTexture> = {
//   dirt: dirtTexture,
//   grass: grassTexture,
//   glass: glassTexture,
//   wood: woodTexture,
//   log: logTexture,
// }

export {
  dirtTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  logTexture,
  // textureMap,
  groundTexture,
  ziTexture
}



