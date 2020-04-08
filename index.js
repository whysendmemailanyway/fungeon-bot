'use strict';
require('dotenv').config();
//require('./src/microlite20');
let Character = require('./src/microlite20/character').default;
let FChatLib = require('./xfchatlib').default;
let botPlugin = require('./plugins/my_plugin').CommandHandler;
let options = {
    username: process.env.FLIST_USERNAME,
    password: process.env.FLIST_PASSWORD,
    character: process.env.FLIST_BOT_CHARACTER,
    master: process.env.FLIST_MASTER_CHARACTER,
    room: process.env.FLIST_ROOM_ID,
    cname: process.env.CLIENT_NAME,
    cversion: process.env.CLIENT_VERSION
};
let myFchatBot = new FChatLib(options);
//myFchatBot.connect();
//let myPlugin = botPlugin(myFchatBot, options.room);
let character = new Character('defaultdan');
new Character('fightdwarf', Character.RACE_DWARF, Character.CLASS_FIGHTER);
new Character('elfmage', Character.RACE_ELF, Character.CLASS_MAGI);
new Character('halflingrogue', Character.RACE_HALFLING, Character.CLASS_ROGUE);
new Character('humancleric', Character.RACE_HUMAN, Character.CLASS_CLERIC);