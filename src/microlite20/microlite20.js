let Character = require('./character').default;
let raceLib = require('./race');

class Microlite20 {
    constructor () {
        new Character('defaultdan');
        new Character('fightdwarf', raceLib.allRaces.DWARF, Character.CLASS_FIGHTER);
        new Character('elfmage', raceLib.allRaces.ELF, Character.CLASS_MAGI);
        new Character('halflingrogue', raceLib.allRaces.HALFLING, Character.CLASS_ROGUE);
        new Character('humancleric', raceLib.allRaces.HUMAN, Character.CLASS_CLERIC);
    }
}

module.exports.default = Microlite20;