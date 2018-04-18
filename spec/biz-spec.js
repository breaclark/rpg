import { Character } from './../src/biz.js';
// import { setClass } from './src/biz.js';

describe('Character', function() {
  let newCharacter;

  beforeEach(function() {
    newCharacter = new Character('Johnny', 150);
    console.log(newCharacter);
  });

  // it('should create a new Character object with the name Johnny, class of hacks, and 150 health', function() {
  //
  // });
});
