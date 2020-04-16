//--Game Class---
export class Game {
  constructor() {
    this.board = new Board();
    // this.player = new Player();;
    // this.enemy = new Enemy();
    // this.currentSpace = this.board.space1;
    // this.enemySpace = this.board.space1;
    
    // this.action = [];
  }
}


//--Player Class---
// export class Player {
//   constructor() {
//     this.shopper1 = { action: "grab" }
//     this.hoarder1 = { action: "swipe" }
//   }


//--Battle Class ---
export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }
}
  //--Turn  class --



  // Player Location--
  export class Space {
    constructor(xCoordinate, yCoordinate) {
      this.xCoordinate = xCoordinate;
      this.yCoordinate = yCoordinate;
    }
  }

  //--Board Class--
export class Board {
  constructor () {
    this.space1 = new Space(1, 1);
    this.space2 = new Space(1, 2);
    this.space3 = new Space(1, 3);
    this.space4 = new Space(2, 1);
    this.space5 = new Space(2, 2);
    this.space6 = new Space(2, 3);
    this.space7 = new Space(3, 1);
    this.space8 = new Space(3, 2);
    this.space9 = new Space(3, 3);
  }
}


  // Shopper 1 class --


  // Hoarder 1 Class ---



