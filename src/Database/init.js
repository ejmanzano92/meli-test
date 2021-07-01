const { Pool } = require('pg');
const migration = require('./InitMigration');
// pools will use environment variables
// for connection information

const pool = new Pool({ connectionString: process.env.db_link, ssl: { rejectUnauthorized: false } });

const run = () => {
  migration(pool);
}

const getPool = () => {
  return pool;
}

module.exports = { run, getPool };