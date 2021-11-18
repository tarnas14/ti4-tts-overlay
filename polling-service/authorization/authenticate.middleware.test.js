const authenticate = require('./authenticate.middleware')

test('should call next if provided access token is valid', async () => {
  // given
  const req = {
    get: jest.fn().mockReturnValueOnce('Bearer someValidAccessToken'),
    authRepository: {
      getClientIdByToken: jest.fn().mockResolvedValueOnce('adsf')
    }
  }
  const res = {}
  const next = jest.fn()

  // when
  await authenticate(req, res, next)

  // then
  expect(next).toHaveBeenCalled()
  expect(next.mock.calls[0][0]).not.toBeDefined()
  expect(req.authRepository.getClientIdByToken).toHaveBeenCalledWith('someValidAccessToken')
})

test('should add clientId to req if token is valid', async () => {
  // given
  const req = {
    get: jest.fn().mockReturnValueOnce('Bearer someValidAccessToken'),
    authRepository: {
      getClientIdByToken: jest.fn().mockResolvedValueOnce('clientId')
    }
  }
  const res = {}
  const next = () => {}

  // when
  await authenticate(req, res, next)

  // then
  expect(req.clientId).toEqual('clientId')
})

test('should return 401 if token is invalid', async () => {
  // given
  const req = {
    get: jest.fn().mockReturnValueOnce('Bearer invalidAccessToken'),
    authRepository: {
      getClientIdByToken: jest.fn().mockResolvedValueOnce(null)
    }
  }
  const res = {
    sendStatus: jest.fn()
  }
  const next = jest.fn()

  // when
  await authenticate(req, res, next)

  // then
  expect(next).not.toHaveBeenCalled()
  expect(res.sendStatus).toHaveBeenCalledWith(401)
})

