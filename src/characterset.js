import { Hacks } from './hacks.js';

class Character {
  constructor(userName, health) {
    this.userName = userName;
    this.health = health;
    this.characterClass;
  }

  setClass(input) {
    let keyMap = new Map();
    keyMap.set(49, new Hacks('Johnny'));
    this.characterClass = keyMap.get(input);
  }


}
export { Character };
