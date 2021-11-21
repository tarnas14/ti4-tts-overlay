const { v5 } = require('uuid')

const factory = (query, config) => {
  return {
    authorize: async ({ clientId, apiKey }) => {
      const token = v5(`${clientId}.${apiKey}.${Date.now()}`, config.uuidNamespace)

      await query('INSERT INTO auth (token, "clientId") VALUES($1, $2)', [token, clientId])

      return token
    },
    getClientIdByToken: async(token) => {
      const results = await query('SELECT * FROM auth WHERE token = $1', [token])

      if (!results.rows.length) {
        return null
      }

      return results.rows[0].clientId
    }
  }
}

module.exports = factory
