class Battle {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  phaseOne() {
    // Choose Character
    // move to phase 2
  }

  phaseTwo() {
    // log key inputs from users
    // add multipliers
    // add totals from keystrokes
    // subtract from each players health
    // move to phase 3
  }

  phaseThree() {
    // Check to see is a players health was reduced to 0
      // if yes, declare other player the victor
      // if no, check to see if any players have any points
        // if yes, ask if a player would like to spend a point
          //if yes, add 20 health to player
        // if no move to phase 4
    //move to phase 4
  }

  phaseFour() {
    // repeat phases 2 and 3 until win condition is met
  }
}

export { Battle };
