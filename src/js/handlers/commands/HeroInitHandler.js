/*
Created by Freshek on 13.10.2017
*/

class HeroInitHandler {
  static get ID() {
    return 13633;
  }

  constructor(f) {
    this._handler = function(e, a) {

      // FIXME? reconnect/revive bug? needs confiramtion
      a.ships = [];
      a.boxes = {};
      a.gates = [];
      a.targetShip = null;
      a.attacking = false;
      a.triedToLock = false;
      a.lockedShip = null;

      var heroJson = JSON.parse(e.detail);

      if (window.hero == null) {
        window.hero = new Hero(heroJson.x, heroJson.y, heroJson.factionId);
      }
      f();
      window.initialized = true;
    }
  }

  get handler() {
    return this._handler;
  }
}
