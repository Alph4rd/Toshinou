/*
Created by Freshek on 30.01.2018
*/

class Battlestation extends Movable {
  constructor(x, y, id, name, factionId) {
    super(x, y);
    this.id = id;
    this.name = name;
    this.factionId = factionId;
    this.modules = {};
  }
}
