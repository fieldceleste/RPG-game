//--Game Class---
export class Game() {
  constructor(){
    this.player = new player();;
    this.enemy = new Hoarder();
    this.currentSpace = this.board.space1;
    this.enemySpace = this.board.space1;
    this.board = new board();
    this.action = [];
  }



  //--Player Class---
  export class Player() {
    this.shopper1 = { action: "grab" }
    this.hoarder1 = { action: "swipe"}
  }



