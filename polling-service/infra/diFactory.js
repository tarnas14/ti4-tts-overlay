const {dbFactory} = require('./useDb')
const authRepositoryFactory = require('./authRepository')
const configFactory = require('./config')

const diFactory = pool => {
  return async (req, res, next) => {
    try {
      if (!req.config) {
        req.config = configFactory()
      }

      if (!req.db)  {
        req.db = await dbFactory(pool)
      }

      if (!req.authRepository) {
        req.authRepository = authRepositoryFactory(req.db.query, req.config)
      }

      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = diFactory
