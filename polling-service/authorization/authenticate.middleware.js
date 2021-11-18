const authenticate = async (req, res, next) => {
  const auth = req.get('Authorization')
  const token = auth.substr(7)

  const tokenIsValid = await req.authRepository.validate(token)
  if (tokenIsValid) {
    next()
    return
  }

  res.sendStatus(401)
}

module.exports = authenticate
