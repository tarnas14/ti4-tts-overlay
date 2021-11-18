const authorizedClientsFactory = () => {
  if (!process.env.AUTHORIZED_CLIENTS) {
    return []
  }

  return process.env.AUTHORIZED_CLIENTS.split(';').map(clientWithKey => {
    const [clientId, apiKey] = clientWithKey.split(':')
    return { clientId, apiKey }
  })
}

const EVERY_5_MINUTES = '*/5 * * * *'
const factory = () => {
  return {
    authorizedClients: authorizedClientsFactory(),
    uuidNamespace: process.env.UUID_NAMESPACE,
    pollerCron: process.env.POLLER_CRON || EVERY_5_MINUTES,
  }
}

module.exports = factory
