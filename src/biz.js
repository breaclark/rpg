class Character {
  constructor(userName, health) {
    this.userName = userName;
    this.health = health;
    this.characterClass;
  }

  setClass(hacks) {
    this.characterClass = hacks;
    // const martian = this.characterClass;


  }
}

// function characterClass() {
//   if this keys is pressed, select this character.
// }

export { Character };
