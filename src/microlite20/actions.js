const dice = require('../dice');
const Character = require('./character');


module.exports = {
    meleeAttack: (attacker, weapon, defender, attackNumber = 1) => {
        if (!weapon) weapon = {full_name: 'Unarmed strike', damage_dice_faces: 3, damage_dice_num: 1};
        let attackRoll = attacker.getMeleeAttack() + dice.getRandomInt(1, 20) - (5 * (attackNumber - 1));
        let hit = false;
        let crit = false;
        let damage = 0;
        let finishingBlow = false;
        let damageBonus = attacker.getStrBonus();
        if (weapon.is_two_handed) damageBonus *= 2;
        if (attackRoll === 20) {
            hit = true;
            crit = true;
        } else if (attackRoll > defender.getArmorClass()) {
            hit = true;
        }
        let canBeFinishingBlow = defender.getCurrentHP() > 0;
        if (crit) {
            damage = weapon.damage_dice_num * weapon.damage_dice_faces + damageBonus;
            if (damage < 1) damage = 1;
            defender.dealDamage(damage);
        } else if (hit) {
            for (let i = 0; i < weapon.damage_dice_num; i++) {
                damage += dice.getRandomInt(1, weapon.damage_dice_faces);
            }
            damage += damageBonus;
            if (damage < 1) damage = 1;
            defender.dealDamage(damage);
        } else {
            // miss
            // might not even have to do ANYTHING here
        }
        finishingBlow = canBeFinishingBlow && defender.getCurrentHP() <= 0;
        return {
            attacker,
            weapon,
            defender,
            hit,
            crit,
            damage,
            finishingBlow
        }
    }
}