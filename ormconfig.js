const dotenv = require('dotenv');
dotenv.config();
module.exports={
   "type": "postgres",
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_NAME,
   "synchronize": true,
   "logging": true,
   "entities": [
      "src/database/entity/**/*.ts"
   ],
   "migrations": [
      "src/database/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/database/entity",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/subscriber"
   }
}