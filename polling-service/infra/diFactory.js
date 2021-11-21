const authRepositoryFactory = require('./authRepository')
const sessionRepositoryFactory = require('./sessionRepository')

const diFactory = (db, config) => {
  return async (req, res, next) => {
    try {
      if (!req.config) {
        req.config = config
      }

      if (!req.db) {
        req.db = db
      }

      if (!req.authRepository) {
        req.authRepository = authRepositoryFactory(req.db.query, req.config)
      }

      if (!req.sessionRepository) {
        req.sessionRepository = sessionRepositoryFactory(req.db.query, req.config)
      }

      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = diFactory
