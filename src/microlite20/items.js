class Item {
    constructor(name='Custom Item', gpValue=0, flags=[]) {
        this.name = name;
        this.gpValue = gpValue;
        this.flags = {...flags.reduce((obj, flagKey) => {
            if (!obj[flagKey]) obj[flagKey] = allFlags[flagKey]
            return obj;
        }, {})};
    }
}

class Container extends Item {
    constructor(name='Custom Container', gpValue=0, mlVolume=0, flags=[]) {
        super(name, gpValue, flags);
        this.mlVolume = mlVolume;
    }
}

let allFlags = {
    isFlammable: 'isFlammable',
    isExplosive: 'isExplosive',
    isFlexible: 'isFlexible',
    isContainer: 'isContainer',
    isTwoHanded: 'isTwoHanded',
    isWeapon: 'isWeapon',
    isLight: 'isLight',
    isMedium: 'isMedium',
    isHeavy: 'isHeavy',
    isRanged: 'isRanged',
    isArmor: 'isArmor',
    isShield: 'isShield'
}

module.exports = {
    Item,
    allItems: {
        ACID_FLASK: new Container('Flask of acid', 10, 500, [allFlags.isFlammable, allFlags.isExplosive]),
        ANTITOXIN_VIAL: new Container('Vial of antitoxin', 50, 30, [allFlags.isFlammable, allFlags.isExplosive]),
        ARTISANS_TOOLS: new Item("Artisan's tools", 5, [allFlags.isFlammable]),
        BACKPACK: new Container('Backpack', 2, 30000),
        // BLANKET_WINTER: new Item('Winter blanket', .5),
        // BLANKET_WINTER: new Item('Winter blanket', .5),
        // BLANKET_WINTER: new Item('Winter blanket', .5),
        // BLANKET_WINTER: new Item('Winter blanket', .5),
        // BLANKET_WINTER: new Item('Winter blanket', .5),
        // BLANKET_WINTER: new Item('Winter blanket', .5),
        // BLANKET_WINTER: new Item('Winter blanket', .5),
        // BLANKET_WINTER: new Item('Winter blanket', .5),
        // BLANKET_WINTER: new Item('Winter blanket', .5),
    }
}

// it would be much better to put all of this into a database... it'd be faster to query what you need, e.g. all heavy armor, ALL items between X and Y value, etc