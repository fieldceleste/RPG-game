import { Game } from '../src/RPG-game.js';

describe('Costco Royale', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

test ("should create a row with player and enemy starting at (1,1)", () => {
  expect(game.board.space1).toEqual({ xCoordinate: 1, yCoordinate: 1 });
  expect(game.board.space2).toEqual({ xCoordinate: 1, yCoordinate: 2 });
  expect(game.board.space3).toEqual({ xCoordinate: 1, yCoordinate: 3 });
  expect(game.board.space4).toEqual({ xCoordinate: 2, yCoordinate: 1 });
  expect(game.board.space5).toEqual({ xCoordinate: 2, yCoordinate: 2 });
  expect(game.board.space6).toEqual({ xCoordinate: 2, yCoordinate: 3 });
  expect(game.board.space7).toEqual({ xCoordinate: 3, yCoordinate: 1 });
  expect(game.board.space8).toEqual({ xCoordinate: 3, yCoordinate: 2 });
  expect(game.board.space9).toEqual({ xCoordinate: 3, yCoordinate: 3 });
  expect(game.board.currentspace).toEqual({xCoordinate: 1, yCoordinate: 1})
  expect(game.enemy1).toEqual ({name:"Shopper1", HP: 50});
  expect(game.enemy1Space).toEqual ({xCoordinate: 1, yCoordinate: 1});


  
});



});





  