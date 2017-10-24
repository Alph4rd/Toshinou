/*
Created by Freshek on 10.10.2017
*/

class ShipCreateHandler {
  constructor() {
    this._handler = function(e) {
      var shipCreateCmd = JSON.parse(e.detail);

      window.ships[shipCreateCmd.userId] = new Ship(shipCreateCmd.x, shipCreateCmd.y, shipCreateCmd.userId, shipCreateCmd.npc, shipCreateCmd.userName, shipCreateCmd.factionId);
    }
  }

  get handler() {
    return this._handler;
  }
}
