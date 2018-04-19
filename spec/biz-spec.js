import { Character } from './../src/characterset.js';
// import { setClass } from './src/biz.js';

describe('Character', function() {
  let player1;
  let player2;

  beforeEach(function() {
    player1 = new Character('Johnny',1, 150);
    player2 = new Character('Brea',2, 150);
    return (player1, player2);
  });

  it('should create a new Character object with the name Johnny, class of hacks, and 150 health', function() {
    expect(player1.userName).toEqual('Johnny');
    expect(player1.health).toEqual(150);
  });

  it('should output that a hacks class was created and is set to Character.characterClass', function() {
    player1.setClass(50);
    expect(player1.characterClass.userName).toEqual('Johnny');
  });

  it('should output that a hacks class was created and is set to Character.characterClass', function() {
    player2.setClass(57);
    expect(player2.characterClass.userName).toEqual('Brea');
  });

});
