const getAccessToken = async (req, res, next) => {
  const clientId = req.get('x-client-id')
  const apiKey = req.get('x-api-key')

  if (!clientId || !apiKey) {
    return {
      status: 400,
      send: [!clientId ? 'x-client-id is missing' : null, !apiKey ? 'x-api-key is missing' : null].filter(Boolean).join('. ')
    }
  }

  const authorizedClients = req.config.authorizedClients

  const foundClient = authorizedClients.find(x => x.clientId === clientId && x.apiKey === apiKey)

  if (!foundClient) {
    return {
      status: 401
    }
  }

  const accessToken = await req.authRepository.authorize({clientId, apiKey})

  return {
    json: { accessToken }
  }
}

module.exports = getAccessToken
