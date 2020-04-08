'use strict';
require('dotenv').config()
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
console.log(options);
let myFchatBot = new FChatLib(options);
myFchatBot.connect();
let myPlugin = botPlugin(myFchatBot, options.room);