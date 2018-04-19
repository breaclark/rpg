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

  winPhase() {
    if (this.player1.health <= 0) {
      this.player2.wins += 1;
      return "player 2";
    } else if (this.player2.health <= 0) {
      this.player1.wins += 1;
      return "player 1";
    } else {
      return;
    }
  }
}

export { Battle };
