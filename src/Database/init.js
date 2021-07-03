const { Pool } = require('pg');
const migration = require('./InitMigration');
// pools will use environment variables
// for connection information
let pool;
if (process.env.env === 'prod') {
  pool = new Pool({ connectionString: process.env.db_link, ssl: { rejectUnauthorized: false } });
} else {
  pool = new Pool({ connectionString: process.env.db_link });
}

const run = () => {
  migration(pool);
}

const getPool = () => {
  return pool;
}

module.exports = { run, getPool };