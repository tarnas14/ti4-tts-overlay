const { Pool } = require('pg')

const dbFactory = async pool => {
  const client = await pool.connect()

  return {
    transaction: {
      begin: () => client.query('BEGIN'),
      commit: () => client.query('COMMIT'),
      rollback: () => client.query('ROLLBACK'),
    },
    query: (...args) => client.query(...args),
  }
}

const getPool = async () => {
  // TODO retry connection etc
  return new Pool()
}

const closePool = async (pool) => {
  await pool?.end()
}

module.exports = {
  dbFactory,
  getPool,
  closePool,
}
