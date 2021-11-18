const authenticate = require('./authenticate.middleware')

test('should call next if provided access token is valid', async () => {
  // given
  const req = {
    get: jest.fn().mockReturnValueOnce('Bearer someValidAccessToken'),
    authRepository: {
      validate: jest.fn().mockResolvedValueOnce(true)
    }
  }
  const res = {}
  const next = jest.fn()

  // when
  await authenticate(req, res, next)

  // then
  expect(next).toHaveBeenCalled()
  expect(next.mock.calls[0][0]).not.toBeDefined()
  expect(req.authRepository.validate).toHaveBeenCalledWith('someValidAccessToken')
})

test('should return 401 if token is invalid', async () => {
  // given
  const req = {
    get: jest.fn().mockReturnValueOnce('Bearer someValidAccessToken'),
    authRepository: {
      validate: jest.fn().mockResolvedValueOnce(false)
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
