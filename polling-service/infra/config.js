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
    mockTTSDataUrl: process.env.MOCK_TTS_DATA,
    prodTTSDataUrl: process.env.PROD_TTS_DATA,
    twitchClientId: process.env.TWITCH_CLIENT_ID,
    twitchSecret: process.env.TWITCH_SECRET,
    twitchExtensionOwnerChannelId: process.env.TWITCH_OWNER
  }
}

module.exports = factory
