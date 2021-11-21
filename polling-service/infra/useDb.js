const { Pool } = require('pg')

const dbFactory = async pool => {
  let transaction = false
  let client = null

  return {
    transaction: {
      begin: async () => {
        transaction = true
        client = await pool.connect()
        await client.query('BEGIN')
      },
      commit: async () => {
        client.query('COMMIT')
        transaction = false
        await client.release()
        client = null
      },
      rollback: async () => {
        await client.query('ROLLBACK')
        transaction = false
        await client.release()
        client = null
      },
    },
    query: async (...args) => {
      if (!client) {
        client = await pool.connect()
      }

      const result = client.query(...args)

      if (!transaction) {
        await client.release()
        client = null
      }

      return result
    },
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
