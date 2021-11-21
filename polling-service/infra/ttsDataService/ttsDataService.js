const request = require('superagent')

const dtoFactory = require('./dtoFactory')

const factory = ({
  config,
}) => {
  const get = async ttsKey => {
    const link = config.mockTTSDataUrl
      ? config.mockTTSDataUrl
      : `${config.prodTTSDataUrl}/data?key=${ttsKey}`

    const response = await request
      .get(link)
      .set('accept', 'json')

    if (response.ok) {
      return dtoFactory(response.body)
    }
  }

  return {
    get,
  }
}

module.exports = factory
