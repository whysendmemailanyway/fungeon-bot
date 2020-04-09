class Stat {
    constructor(name='Custom Stat', key='???') {
        this.name = name;
        this.key = key;
    }
}

let statKeys = {
    STR: 'STR',
    DEX: 'DEX',
    MIND: 'MIND',
}

module.exports = {
    Stat,
    ...statKeys,
    allStats: {
        [statKeys.STR]: new Stat('Strength', statKeys.STR),
        [statKeys.DEX]: new Stat('Dexterity', statKeys.DEX),
        [statKeys.MIND]: new Stat('Mind', statKeys.MIND)
    }
}