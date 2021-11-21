const authenticate = async (req, res, next) => {
  const auth = req.get('Authorization')
  if (!auth) {
    res.sendStatus(401)
    return
  }
  const token = auth.substr(7)
  console.log(`got token "${token}"`)

  const clientId = await req.authRepository.getClientIdByToken(token)
  if (clientId) {
    req.clientId = clientId
    next()
    return
  }

  res.sendStatus(401)
}

module.exports = authenticate
