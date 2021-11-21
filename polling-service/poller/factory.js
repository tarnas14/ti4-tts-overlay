const sessionRepositoryFactory = require('../infra/sessionRepository')
const ttsDataServiceFactory = require('../infra/ttsDataService')

const pollerFactory = require('./poller')

const factory = (db, config) => {
  const sessionRepository = sessionRepositoryFactory(db.query, config)

  const twitchNotifications = {
    broadcast: session => console.log('broadcasting session data', JSON.stringify(session, null, 2))
  }

  const ttsDataService = ttsDataServiceFactory({
    config,
  })

  return pollerFactory({
    sessionRepository,
    twitchNotifications,
    ttsDataService,
  })
}

module.exports = factory
