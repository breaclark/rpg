class Battle {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.multiplier;
  }

  phaseOne(player1class, player2class) {
    this.player1.setClass(player1class);
    this.player2.setClass(player2class);
    let player1 = this.player1.characterClass.type;
    let player2 = this.player2.characterClass.type;
    let buff = (
      (player1 === 'martian' && player2 === 'hacks') || (player1 === 'hacks' && player2 === 'ai') || (player1 === 'ai' && player2 === 'martian')
    ) ? 1 : 2;
    this.multiplier = buff;
  }

  phaseTwo(player1KeyStrokes, player2KeyStrokes) {
    this.multiplier === 1 ? (player1KeyStrokes = Math.floor(player1KeyStrokes * 1.1)) : (player2KeyStrokes =  Math.floor(player2KeyStrokes * 1.1));
    this.player1.health -= player2KeyStrokes;
    this.player2.health -= player1KeyStrokes;
  }

  // optionalPhase() {
  //
  // }

  winPhase(player1health, player2health) {
    this.player1.health = player1health;
    this.player2.health = player2health;
    if (player1health <= 0) {
      return this.player2.wins += 1
    } else if (player2health <= 0) {
      return this.player1.wins += 1
    }
  }
}

export { Battle };
