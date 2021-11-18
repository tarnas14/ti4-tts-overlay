const authenticate = async (req, res, next) => {
  const auth = req.get('Authorization')
  const token = auth.substr(7)

  const clientId = await req.authRepository.getClientIdByToken(token)
  if (clientId) {
    req.clientId = clientId
    next()
    return
  }

  res.sendStatus(401)
}

module.exports = authenticate
