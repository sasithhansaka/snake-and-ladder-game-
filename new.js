// export { Board };
// export { Player };

//player class
export class Player {
  constructor(name, color, image, id) {
    this.name = name;
    this.position = 0;
    this.rolledNumber = 0;
    this.color = color;
    this.image = image;
    this.id = id;
  }
}

//clas SnakesladdersLink

class SnakesladdersLink {
  constructor(square, endSquare) {
    this.square = square;
    this.endSquare = endSquare;
    this.next = null;
    this.previous = null;
    this.players = [];
  }
}

//class board

export class Board {
  constructor() {
    this.first = null;
    this.last = null;
    this.snakesarray = [
      [30, 7],
      [47, 15],
      [56, 19],
      [73, 51],
      [82, 42],
      [92, 75],
      [98, 55],
    ];
    this.laddersArray = [
      [4, 25],
      [21, 39],
      [29, 74],
      [43, 76],
      [63, 80],
      [71, 89],
    ];
    this.players = [];
  }

  //findsquare

  insertSquare(Square, endSquare) {
    const newSquare = new SnakesladdersLink(Square, endSquare);
    if (this.first == null) {
      this.first = newSquare;
      this.last = newSquare;
    } else {
      this.last.next = newSquare;
      newSquare.previous = this.last;
      this.last = newSquare;
    }
  }

  //displaySquare

  handleInsertSquare(index) {
    for (let i = 0; i < 7; i++) {
      if (index == this.snakesarray[i][0]) {
        this.insertSquare(index, this.snakesarray[i][1]);
        return;
      }
    }

    for (let i = 0; i < 6; i++) {
      if (index == this.laddersArray[i][0]) {
        this.insertSquare(index, this.laddersArray[i][1]);
        return;
      }
    }

    this.insertSquare(index, index);
  }

  findSquare(Squareid) {
    // alert("ddvdv");
    let findlink = this.first;
    while (findlink != null) {
      if (findlink.square == Squareid) {
        return findlink;
      } else {
        findlink = findlink.next;
      }
    }
    return null;
  }

  ////////////////////new/////////////
  deleteNodePlayer(Squareid, currentPlayerNumber) {
    let current = this.first;
    while (current != null) {
      if (current.square == Squareid) {
        // current.players[currentPlayerNumber - 1] = null;
        current.players = current.players.filter(
          (player) => currentPlayerNumber != player.id
        );
        // return;
      }
      current = current.next;
    }
  }

  addPlayers(player, currentPlayerNumber) {
    // this.players.push(player);
    let startSquare = this.findSquare(player.position);
    if (startSquare != null) {
      startSquare.players.push(player);
      console.log(player);
      // startSquare.players[currentPlayerNumber - 1] = player;
    }
    console.log("update");
    console.log(startSquare.players);
  }
}
