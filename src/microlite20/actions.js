const dice = require('../dice');
const Character = require('./character');


module.exports = {
    meleeAttack: (attacker, weapon, defender, attackNumber = 1) => {
        let attackRoll = attacker.getMeleeAttack() + dice.getRandomInt(1, 20);
        let hit = false;
        let crit = false;
        let damage;
        let finishingBlow = false;
        if (attackRoll === 20) {
            hit = true;
            crit = true;
        } else if (attackRoll > defender.getArmorClass()) {
            hit = true;
        }
        if (crit) {
            // set damage to maximum
        } else if (hit) {
            // roll weapon damage die, add character strength
        } else {
            // miss
        }
        return {
            hit,
            crit,
            damage,
            finishingBlow
        }
    }
}