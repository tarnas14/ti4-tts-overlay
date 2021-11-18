const createSession = require('./createSession.route')

test('it should create session based on body and clientId', async () => {
  // given
  const req = {
    clientId: 'someClientId',
    sessionRepository: {
      create: jest.fn().mockResolvedValueOnce('someId')
    },
    body: {
      type: 'twitch',
      channelId: '32466573',
      ttsKey: 'ttsKey',
    }
  }

  // when
  const result = await createSession(req, {}, () => null)

  // then
  expect(result.status).toEqual(202)
  expect(req.sessionRepository.create).toHaveBeenCalledWith({
    clientId: 'someClientId',
    ttsKey: 'ttsKey',
    type: 'twitch',
    config: {
      channelId: '32466573',
    }
  })
})
