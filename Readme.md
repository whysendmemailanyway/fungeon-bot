### Install:

```
cd xfchatlib
npm install
cd ..
npm install
```

### Configure:

1. Create a `.env` file in the project directory
1. Define the following environment variables in your `.env` file:
```
FLIST_USERNAME=yourflistaccountnamehere
FLIST_PASSWORD=yourflistpasswordhere
FLIST_BOT_CHARACTER=your bot character's name here
FLIST_MASTER_CHARACTER=the name of your character who is responsible for the bot
FLIST_ROOM_ID=adh-yourroomcodehere
CLIENT_NAME=the name of this project basically
CLIENT_VERSION=this project's version number, e.g 1.0.0
PG_USER=yourpostgresuser
PG_PASS=yourpostgrespass
DB_HOST=address.that.hosts.database
DB_DEVELOPMENT=dev-databasename
```

Make sure `.env` is listed in your `.gitignore` file if you plan on sharing the repository with anyone. Keep your account name and password secret!

### Run:

```
npm start
```

### Credits: 

AelithBlanchett saved me a ton of work with their fchatlib package! https://www.npmjs.com/package/fchatlib