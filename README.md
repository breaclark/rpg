# ROCK PAPER SCISSORS EXTREME EDITION

## Setup/Installation Requirements

* Clone Repository
* Run npm install
* Run ng serve --open

## Known Bugs

No Known Bugs

## Support and contact details

Contact me at breatortilla@gmail.com

## Technologies Used

* HTML
* CSS
* Javascript
* Typescript
* Angular

### License

Copyright (c) 2018 **Brea Clark**

# How it Works

## Character Class & Attributes
### H4ckx
* "paper"

### Martian
* "scissors"

### AI
* "rock"


# Battle System
## Battle Triangle
* H4ckx > AI
* AI > Martian
* Martian > H4ckx

### 150 base health per Character
### Each attack does 1 damage
### 10% Attack bonus to advantage holder
### Win by bringing opponents health down to 0
### Attack by rapidly pressing the V key for player 1 and the M key for player 2.

## Battle Phases
### Phase 1:
* Both players Choose Characters secretly

### Phase 2:
* Player rapidly presses the V key for 10 seconds while the app logs the amount of key presses within the time limit.
* Multipliers are added if Character has advantage in the battle triangle.
* Damage is applied
* Reduce health

### Phase 3
* If a player has won, show victory screen
* Add a point (bandaid) to the players stash
#### OPTIONAL
* A Bandaid can be spent during this phase provided the player has usable points.
* Bandaids heal for 20-25 Health

### Phase 4
* Repeat from phases 2 and 3 until win condition is met
* Winner is rewarded a point (bandaid)
