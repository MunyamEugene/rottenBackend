const dotenv = require('dotenv');
dotenv.config();
module.exports={
   "type": "postgres",
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_NAME,
   "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  },
   "synchronize": true,
   "logging": true,
   "entities": [
      "build/database/entity/**/*.js"
   ],
   "migrations": [
      "build/database/migration/**/*.js"
   ],
   "subscribers": [
      "build/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "build/database/entity",
      "migrationsDir": "build/database/migration",
      "subscribersDir": "build/subscriber"
   }
}