const dice = require('../dice');
let raceLib = require('./race');
let skillsLib = require('./skills');
let statsLib = require('./stats');

class Character {
    constructor(name='', race=raceLib.allRaces.NONE, charClass=Character.CLASS_FIGHTER) {
        this.name = name;
        this.race = race;
        this.charClass = charClass;
        this.level = 1;
        this.hpGains = [6];
        this.setStr(this.rollStat());
        this.setDex(this.rollStat());
        this.setMind(this.rollStat());
        this.damage = 0;
        this.spellDamage = 0;
        this.strengthDamage = 0;
        console.log(this.toString());
        console.log('');
    }

    setStr(newValue) {
        this._str = newValue;
    }

    setDex(newValue) {
        this._dex = newValue;
    }

    setMind(newValue) {
        this._mind = newValue;
    }

    getStrBonus() {
        return this._getStatBonus(this.getStr());
    }

    getDexBonus() {
        return this._getStatBonus(this.getDex());
    }

    getMindBonus() {
        return this._getStatBonus(this.getMind());
    }

    _getStatBonus(stat) {
        return Math.floor((stat - 10) / 2);
    }

    getBonusForKey(key) {
        return this.race.bonuses[key] || 0;
    }

    dealDamage(amount) {
        let hp = this.getCurrentHP();
        if (hp - amount > 0) {
            this.damage += amount;
        } else if (hp - amount === 0) {
            this.damage += amount;
            // fall unconscious
        } else {
            this.damage = this.getMaxHP() - (this.spellDamage);
            this.strengthDamage += hp - amount;
            if (this.getStr() <= 0) {
                // die
            }
        }
    }

    getInitiative() {
        return this.getDexBonus();
    }

    getArmorClass() {
        // TODO: add equipped armor..?
        return 10 + this.getDexBonus();
    }

    /*
        If the total bonus is +6 or more a second attack can be made
        with a -5 penalty. If the total bonus is +11 or more a third
        attack can be made at -10. For example, if the total bonus is
        +12, three attacks can be made at +12/+7/+2.
    */

    getMeleeAttack() {
        /* Fighters and Rogues can use DEX bonus + Level as Melee
            attack bonus instead if wielding a light weapon. Fighters and
            Rogues can wield 2 light weapons and attack with both in a
            round if they take a -2 penalty on all attack rolls that round.
            Rapiers count as light weapons, but you cannot wield two
            rapiers at the same time.

            Add STR bonus to Melee damage, x2 for 2-handed weapons
        */
        return this.getStrBonus() + this.level;
    }

    getMissileAttack() {
        return this.getDexBonus() + this.level;
    }

    getMagicAttack() {
        return this.getMindBonus() + this.level;
    }

    getSpellDC() {
        return 10 + this.level + this.getMindBonus();
    }

    rollStat() {
        let rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(dice.getRandomInt(1, 6));
        }
        rolls.sort();
        return rolls.slice(1).reduce((a, b) => a + b);
    }

    getStr() {
        let bonus = this.getBonusForKey(statsLib.STR);
        return this._str + bonus - this.strengthDamage;
    }

    getDex() {
        let bonus = this.getBonusForKey(statsLib.DEX);
        return this._dex + bonus;
    }

    getMind() {
        let bonus = this.getBonusForKey(statsLib.MIND);
        return this._mind + bonus;
    }

    getPhysical() {
        let bonus = this.getBonusForKey(skillsLib.PHYSICAL);
        if (this.charClass === Character.CLASS_FIGHTER) bonus += 3;
        return this.level + bonus;
    }

    getSubterfuge() {
        let bonus = this.getBonusForKey(skillsLib.SUBTERFUGE);
        if (this.charClass === Character.CLASS_ROGUE) bonus += 3;
        return this.level + bonus;
    }

    getKnowledge() {
        let bonus = this.getBonusForKey(skillsLib.KNOWLEDGE);
        if (this.charClass === Character.CLASS_MAGI) bonus += 3;
        return this.level + bonus;
    }

    getCommunication() {
        let bonus = this.getBonusForKey(skillsLib.COMMUNICATION);
        if (this.charClass === Character.CLASS_CLERIC) bonus += 3;
        return this.level + bonus;
    }

    getFortitude() {
        return this.getPhysical() + this.getStrBonus();
    }

    getReflex() {
        return this.getPhysical() + this.getDexBonus();
    }

    getWill() {
        return this.level + this.getMindBonus();
    }

    getMaxSpellLevel() {
        return Math.ceil(this.level / 2);
    }

    getSpellType() {
        if (Character.charClass === Character.CLASS_MAGI) return 'arcane';
        if (Character.charClass === Character.CLASS_CLERIC) return 'divine';
    }

    getArmorType() {
        let armors = [];
        if (Character.charClass === Character.CLASS_CLERIC || Character.charClass === Character.CLASS_FIGHTER || Character.charClass === Character.CLASS_FIGHTER) {
            armors.push('light');
        }
        if (Character.charClass === Character.CLASS_CLERIC || Character.charClass === Character.CLASS_FIGHTER) {
            armors.push('medium');
        }
        if (Character.charClass === Character.CLASS_FIGHTER) {
            armors.push('heavy', 'shields');
        }
        return armors;
    }

    raiseLevel() {
        /*
            If the level divides by three (i.e. level 3,6,9,etc.) add 1 point
            to STR, DEX or MIND.
            Fighters gain +1 to their attack and damage rolls at levels
            5,10,15,etc.
            Clerics and Magi gain access to new spell levels at levels
            3,5,7,9,etc.
        */
        this.level += 1;
        this.hpGains.push(dice.getRandomInt(1, 6));
    }

    getMaxHP() {
        return this.getStr() + this.hpGains.reduce((a, b) => a + b);
    }

    getCurrentHP() {
        return this.getMaxHP() - (this.damage + this.spellDamage);
    }

    toString() {
        return `${this.name}, a level ${this.level} ${this.race.name} ${this.charClass}. ${this.getStr()} STR, ${this.getDex()} DEX, ${this.getMind()} MIND. ${this.getCurrentHP()} / ${this.getMaxHP()} HP.`
    }
}
Character.CLASS_FIGHTER = "Fighter";
Character.CLASS_ROGUE = "Rogue";
Character.CLASS_MAGI = "Magi";
Character.CLASS_CLERIC = "Cleric";

module.exports.default = Character;