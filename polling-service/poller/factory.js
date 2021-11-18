const sessionRepositoryFactory = require('../infra/sessionRepository')

const pollerFactory = require('./poller')

const factory = (db, config) => {
  const sessionRepository = sessionRepositoryFactory(db.query, config)

  const twitchNotifications = {
    broadcast: session => console.log('broadcasting session data', session)
  }

  const ttsDataService = {
    get: async ttsKey => console.log(`getting data for ttsKey ${ttsKey}`)
  }

  return pollerFactory({
    sessionRepository,
    twitchNotifications,
    ttsDataService,
  })
}

module.exports = factory
