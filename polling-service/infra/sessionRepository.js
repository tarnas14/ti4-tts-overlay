const { v5 } = require('uuid')

const factory = (query, config) => {
  return {
    create: async (session) => {
      const id = v5(`${JSON.stringify(session)}.${Date.now()}`, config.uuidNamespace)

      await query('INSERT INTO sessions (id, "clientId", type, "ttsKey", config) VALUES ($1, $2, $3, $4, $5)', [
        id,
        session.clientId,
        session.type,
        session.ttsKey,
        session.config,
      ])

      return id
    },
    getSessionsToUpdate: async () => {
      const results = await query(`SELECT * from sessions WHERE
        active=TRUE AND
        (("lastUpdate" IS NULL) OR (EXTRACT(EPOCH FROM (now() - "lastUpdate")) > ("pollingInterval" * 60)))
      `)

      return results.rows
    },
    setUpdated: async (id) => {
      const results = await query('UPDATE sessions SET "lastUpdate"=$1 WHERE id=$2', [new Date(), id])

      return results.rowCount === 1
    },
  }
}

module.exports = factory
