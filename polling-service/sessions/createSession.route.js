const createSession = async (req, res, next) => {
  const {type, channelId, ttsKey} = req.body
  await req.sessionRepository.create({
    clientId: req.clientId,
    type,
    ttsKey,
    config: {
      channelId
    }
  })

  return {
    status: 202,
  }
}

module.exports = createSession
