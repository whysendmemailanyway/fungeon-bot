require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DEVELOPMENT,
      user:     process.env.PG_USER,
      password: process.env.PG_PASS
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
