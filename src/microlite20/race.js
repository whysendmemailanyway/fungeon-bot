let skillLib = require('./skills');
let statLib = require('./stats');

class Race {
    constructor(name='Custom Race', bonuses={}) {
        this.name = name;
        this.bonuses = bonuses;
    }
}

module.exports = {
    Race,
    allRaces: {
        NONE: new Race('Raceless'),
        HUMAN: new Race('Human', Object.keys(skillLib.allSkills).reduce(
            (a, b) => {
                a[b] = 1;
                return a;
            }, {})
        ),
        ELF: new Race('Elf', {[statLib.MIND]: 2}),
        DWARF: new Race('Dwarf', {[statLib.STR]: 2}),
        HALFLING: new Race('Halfling', {[statLib.DEX]: 2})
    }
}