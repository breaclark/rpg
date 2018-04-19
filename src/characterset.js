import { Hacks } from './hacks.js';
import { Ai } from './ai.js';
import { Martian } from './martian.js';

class Character {
  constructor(userName, health) {
    this.userName = userName;
    this.health = health;
    this.characterClass;
  }

  setClass(input) {
    let keyMap = new Map();
    keyMap.set(49, new Hacks(this.userName)); //player 1
    keyMap.set(55, new Hacks(this.userName)); //player 2

    keyMap.set(50, new Ai(this.userName));
    keyMap.set(56, new Ai(this.userName));

    keyMap.set(51, new Martian(this.userName));
    keyMap.set(57, new Martian(this.userName));
    this.characterClass = keyMap.get(input);
  }


}
export { Character };
