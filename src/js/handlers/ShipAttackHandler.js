/*
Created by Freshek on 07.10.2017
*/

class ShipAttackHandler {
  constructor() {
    this._handler = function(e) {
      var shipAttackCmd = JSON.parse(e.detail);

      console.log(shipAttackCmd);
      // TODO: Make this cleaner – create a Ship object
      if (shipAttackCmd[Variables.attackerId] == window.userId) { //attacker id
        window.attackWindow.hp(shipAttackCmd[Variables.attackHp]);
        window.attackWindow.shd(shipAttackCmd[Variables.attackShd]);
        window.attackWindow.targetName(window.ships[shipAttackCmd[Variables.attackedId]]);
      }
    }
  }

  get handler() {
    return this._handler;
  }
}
