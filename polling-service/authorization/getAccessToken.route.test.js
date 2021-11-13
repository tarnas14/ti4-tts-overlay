const getAccessToken = require('./getAccessToken.route')

test('should get accessToken from repository if client and apiKey are authorized for it', async () => {
  // given
  const accessToken = 'oaiweuroaisdufoiasdf'
  const authorize = jest.fn()
  authorize.mockResolvedValueOnce(accessToken)
  const authRepository = {
    authorize
  }
  const get = x => {
    if (x === 'x-client-id') {
      return 'mockClientId'
    }

    if (x === 'x-api-key') {
      return 'mockApiKey'
    }
  }
  const req = {
    get,
    authRepository,
    config: {
      authorizedClients: [{ clientId: 'mockClientId', apiKey: 'mockApiKey'}],
    }
  }
  const res = {}
  const next = () => null

  // when
  const result = await getAccessToken(req, res, next)

  // then
  expect(authorize).toHaveBeenCalledWith({clientId: 'mockClientId', apiKey: 'mockApiKey'})
  expect(result.status).not.toBeDefined()
  expect(result.accessToken).toBe(accessToken)
})

test('should return 401 if client/key is not present in configuration', async () => {
  // given
  const get = x => {
    if (x === 'x-client-id') {
      return 'mockClientId'
    }

    if (x === 'x-api-key') {
      return 'mockApiKey'
    }
  }
  const req = {
    get,
    config: {
      authorizedClients: [],
    }
  }
  const res = {}
  const next = () => null

  // when
  const result = await getAccessToken(req, res, next)

  // then
  expect(result.status).toBe(401)
})

test('should return 400 if x-client-id is missing', async () => {
  // given
  const get = x => {
    if (x === 'x-client-id') {
      return null
    }

    if (x === 'x-api-key') {
      return 'mockApiKey'
    }
  }
  const req = {
    get,
    config: {
      authorizedClients: [],
    }
  }
  const res = {}
  const next = () => null

  // when
  const result = await getAccessToken(req, res, next)

  // then
  expect(result.status).toBe(400)
  expect(result.send).toBe('x-client-id is missing')
})

test('should return 400 if x-api-key is missing', async () => {
  // given
  const get = x => {
    if (x === 'x-client-id') {
      return 'mockClientId'
    }

    if (x === 'x-api-key') {
      return null
    }
  }
  const req = {
    get,
    config: {
      authorizedClients: [],
    }
  }
  const res = {}
  const next = () => null

  // when
  const result = await getAccessToken(req, res, next)

  // then
  expect(result.status).toBe(400)
  expect(result.send).toBe('x-api-key is missing')
})
