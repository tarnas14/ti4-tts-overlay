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
  }
}

module.exports = factory
