const authorizedClientsFactory = () => {
  if (!process.env.AUTHORIZED_CLIENTS) {
    return []
  }

  return process.env.AUTHORIZED_CLIENTS.split(';').map(clientWithKey => {
    const [clientId, apiKey] = clientWithKey.split(':')
    return { clientId, apiKey }
  })
}

const factory = () => {
  return {
    authorizedClients: authorizedClientsFactory()
  }
}

module.exports = factory