const sessionRepositoryFactory = require('../infra/sessionRepository')
const ttsDataServiceFactory = require('../infra/ttsDataService')
const twitchNotificationsFactory = require('../infra/twitchNotifications')

const pollerFactory = require('./poller')

const factory = (db, config) => {
  const sessionRepository = sessionRepositoryFactory(db.query, config)

  const twitchNotifications = twitchNotificationsFactory(config)

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
