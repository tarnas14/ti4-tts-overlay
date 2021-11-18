const { v5 } = require('uuid')

const factory = (query, config) => {
  return {
    authorize: async ({ clientId, apiKey }) => {
      const token = v5(`${clientId}.${apiKey}.${Date.now()}`, config.uuidNamespace)

      await query("INSERT INTO auth (token, clientId) VALUES($1, $2, $3)", [token, clientId])

      return token
    },
    validate: async(token) => {
      const results = await query('SELECT * FROM auth WHERE token = $1', [token])

      return results.rows.length === 1
    }
  }
}

module.exports = factory
