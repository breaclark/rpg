import { Character } from './../src/characterset.js';
import { Ai } from './../src/ai.js';
import { Hacks } from './../src/hacks.js';
import { Battle } from './../src/battlesystem.js';
  // import { setClass } from './src/biz.js';

describe('Character', function() {
  let player1;
  let player2;
  let battle;

  beforeEach(function() {
    player1 = new Character('Johnny',1);
    player2 = new Character('Brea',2);
    battle = new Battle(player1, player2);
    return (player1, player2, battle);
  });

  // new Character Constructor test
  it('should create a new Character object with the name Johnny, class of hacks, and 150 health', function() {
    expect(player1.userName).toEqual('Johnny');
    expect(player1.health).toEqual(150);
  });

  // class creation and assignment
  it('should output that a hacks class was created and is set to Character.characterClass', function() {
    player1.setClass(50);
    expect(player1.characterClass.userName).toEqual('Johnny');
    expect(player1.characterClass).toEqual(jasmine.any(Ai));
    player2.setClass(55);
    expect(player2.characterClass.userName).toEqual('Brea');
    expect(player2.characterClass).toEqual(jasmine.any(Hacks));
  });

  // initialize battle class
  // pass characters into class
  it('should create a battle instance with player 1 and player 2 passed into it as arguments', function() {
    expect(battle.player1).toEqual(jasmine.any(Character));
    expect(battle.player2).toEqual(jasmine.any(Character));
    expect(battle.player1.userName).toEqual('Johnny');
    expect(battle.player2.userName).toEqual('Brea');
  });


  // keycodes bindings
  // phase 1 tests
  it('should test phaseOne to make sure that player1 is set correctly via user input', function() {
    battle.phaseOne(49, 56);
    expect(player1.characterClass).toEqual(jasmine.any(Hacks));
    expect(player2.characterClass).toEqual(jasmine.any(Ai));
    expect(battle.multiplier).toEqual(1);
  });

  // phase 2 tests
  it('should test phaseTwo to make sure that multipliers are calculated and damage is applied', function() {
    battle.phaseOne(49, 57);
    battle.phaseTwo(59, 53);
    expect(player1.health).toEqual(92);//
    expect(player2.health).toEqual(91);
  });

  // phase 3 tests
  it('should test phase 3 to check each players health to see if either players health total has reached 0', function() {
    battle.phaseOne(49, 57);
    battle.phaseTwo(150, 38);
    battle.winPhase(102, 0);
    expect(player1.health).toEqual(102);
    expect(player2.health).toEqual(0);
  });

});
