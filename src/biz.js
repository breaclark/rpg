class Character {
  constructor(userName, characterClass, health) {
    this.userName = userName;
    this.characterClass = characterClass;
    this.health = health;
  }

  setClass() {
    const Classes = {
      "hacks": "H4CKX",
      "martian": "Martian Man",
      "ai": "AI"
    }

    let this.characterClass = Classes.hacks;
  }
}

export { Character };
export { setClass };
