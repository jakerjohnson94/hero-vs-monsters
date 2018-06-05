"use strict";

function Monster(name, classification,health, isAlive ){
  LivingThing.call(this, name, health, isAlive);
  this.classification = classification
}