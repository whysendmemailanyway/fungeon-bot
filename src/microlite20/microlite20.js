let Character = require('./character').default;
let raceLib = require('./race');
let itemLib = require('./items');
let actionLib = require('./actions');
let narrator = require('./narrator');

class Microlite20 {
    constructor (knex) {
        //new Character('defaultdan');
        let fighty = new Character('Punch Dwarf', raceLib.allRaces.DWARF, Character.CLASS_FIGHTER);
        let magey = new Character('Fancy Pants', raceLib.allRaces.ELF, Character.CLASS_MAGI);
        //new Character('halflingrogue', raceLib.allRaces.HALFLING, Character.CLASS_ROGUE);
        //new Character('humancleric', raceLib.allRaces.HUMAN, Character.CLASS_CLERIC);
        // 4 spiked chain, 5 falchion
        // 6 light wood shield, 7 heavy steel shield
        itemLib.getAllItems(knex).then((items) => {
            fighty.putInBothHands(items[5]);
            // fighty.equipArmor(items[7]);
            do {
                console.log(narrator.narrateAttack(actionLib.meleeAttack(fighty, fighty.rightHand, magey)));
                console.log(narrator.narrateAttack(actionLib.meleeAttack(fighty, fighty.rightHand, magey, 2)));
                console.log(narrator.narrateAttack(actionLib.meleeAttack(fighty, fighty.rightHand, magey, 3)));
                console.log(magey.getCurrentHP())
                console.log('');
            } while (magey.getCurrentHP() > 0);
            knex.destroy();
        });
    }
}

module.exports.default = Microlite20;