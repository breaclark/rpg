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
    return (player1, player2);
  });

  it('should create a new Character object with the name Johnny, class of hacks, and 150 health', function() {
    expect(player1.userName).toEqual('Johnny');
    expect(player1.health).toEqual(150);
  });

  it('should output that a hacks class was created and is set to Character.characterClass', function() {
    player1.setClass(50);
    expect(player1.characterClass.userName).toEqual('Johnny');
    expect(player1.characterClass).toEqual(jasmine.any(Ai));
  });

  it('should output that a hacks class was created and is set to Character.characterClass', function() {
    player2.setClass(55);
    expect(player2.characterClass.userName).toEqual('Brea');
    expect(player2.characterClass).toEqual(jasmine.any(Hacks));

  });

  it('should create a battle instance with player 1 and player 2 passed into it as arguments', function() {
    battle = new Battle(player1, player2);
    expect(battle.player1).toEqual(jasmine.any(Character));
    expect(battle.player2).toEqual(jasmine.any(Character));
    expect(battle.player1.userName).toEqual('Johnny');
    expect(battle.player2.userName).toEqual('Brea');
  });

});
