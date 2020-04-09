class Skill {
    constructor(name='Custom Skill', key='?????') {
        this.name = name;
        this.key = key;
    }
}

let skillKeys = {
    PHYSICAL: 'PHYSICAL',
    SUBTERFUGE: 'SUBTERFUGE',
    KNOWLEDGE: 'KNOWLEDGE',
    COMMUNICATION: 'COMMUNICATION',
}

module.exports = {
    Skill,
    ...skillKeys,
    allSkills: {
        [skillKeys.PHYSICAL]: new Skill('Physical', skillKeys.PHYSICAL),
        [skillKeys.SUBTERFUGE]: new Skill('Subterfuge', skillKeys.SUBTERFUGE),
        [skillKeys.KNOWLEDGE]: new Skill('Knowledge', skillKeys.KNOWLEDGE),
        [skillKeys.COMMUNICATION]: new Skill('Communication', skillKeys.COMMUNICATION)
    }
}