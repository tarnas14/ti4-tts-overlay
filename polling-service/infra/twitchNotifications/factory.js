const jwt = require('jsonwebtoken')
const request = require('superagent')

const factory = (config) => {
  const getAuthToken = async (payload) => {
    return jwt.sign({
      "user_id": config.twitchExtensionOwnerChannelId,
      "role": "external",
      ...payload
    }, Buffer.from(config.twitchSecret, 'base64'), { algorithm: 'HS256', expiresIn: '30 seconds' })
  }

  const broadcast = async (channelId, sessionData) => {
    const token = await getAuthToken({
      channel_id: channelId,
      pubsub_perms: {
        send: [
          "broadcast"
        ]
      }
    })

    const broadcastPromise = request.post(`https://api.twitch.tv/extensions/message/${channelId}`)
      .send({
        content_type: 'application/json',
        message: JSON.stringify(sessionData),
        targets: ['broadcast'],
      })
      .set('Authorization', `Bearer ${token}`)
      .set('Client-Id', config.twitchClientId)

    const configSetPromise = request.put(`https://api.twitch.tv/extensions/${config.twitchClientId}/configurations`)
      .send({
        channel_id: channelId,
        segment: 'broadcaster',
        content: JSON.stringify(sessionData),
      })
      .set('Authorization', `Bearer ${token}`)
      .set('Client-Id', config.twitchClientId)

    return Promise.allSettled([broadcastPromise, configSetPromise])
  }

  return {
    broadcast,
  }
}

module.exports = factory
