const { Pool } = require('pg')

const dbFactory = async pool => {
  const client = await pool.connect()

  return {
    transaction: {
      begin: () => client.query('BEGIN'),
      commit: () => client.query('COMMIT'),
      rollback: () => client.query('ROLLBACK'),
    },
    query: client.query.bind(client),
  }
}

const useDb = pool => async function(req, res, next) {
  try {
    if (!req.db) {
      req.db = await dbFactory(pool)
    }

    next()
  } catch (e) {
    next(e)
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
  useDb,
  getPool,
  closePool,
}
