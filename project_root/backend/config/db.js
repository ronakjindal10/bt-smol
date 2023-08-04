const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://default:LQHPvS32fOXR@ep-aged-bonus-90090880-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb',
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};