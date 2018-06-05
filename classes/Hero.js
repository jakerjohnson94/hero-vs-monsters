"use strict";

function Hero(name, secretIdentity, health, isAlive) {
  LivingThing.call(this, name, health, isAlive);
  this.secretIdentity = secretIdentity;
}

Hero.prototype.attack = function (selectedMonster) {
  const damageDealt = Math.floor(Math.random() * 10);
  const damageTaken = Math.floor(Math.random() * 10);

  console.log(`${this.name} health (${this.health}) reduced by ${damageTaken}. ${selectedMonster.name} health(${selectedMonster.health}) reduced by ${damageDealt}`)
  selectedMonster.health = Number(selectedMonster.health) - damageDealt
  this.health = Number(this.health) - damageTaken;
  if (this.health <= 0) this.isAlive = false
  if (selectedMonster.health <= 0) {
    selectedMonster.isAlive = false
    console.log(`${selectedMonster.name} was killed by ${this.name}!`)
  }
}

Hero.prototype.fight = function (monsters) {
 
    for (let monster of monsters) {
      while(this.isAlive && monster.isAlive){
      this.attack(monster)
   
    }
  }
}