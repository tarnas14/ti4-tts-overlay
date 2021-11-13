const asyncRouteHandler = (arg1, arg2) => {
  let options = {
    transaction: false
  }
  let callback = () => null

  if (arg1 && arg2) {
    options = {...options, ...arg1}
    callback = arg2
  } else if (!arg2) {
    callback = arg1
  } else {
    next(new Error('at least one callback argument is required in asyncRouteHandler'))
  }

    return async (req, res, next) => {
        try {
          if (options.transaction) {
            await req.db.transaction.begin()
          }

          const result = await callback(req, res)

          if (options.transaction) {
            await req.db.transaction.commit()
          }

          if (!result) {
            return
          }

          res.status(result.status || 200)
          if (result.json) {
            res.json(result.json)
            return
          }

          if (result.send) {
            res.send(result.send)
            return
          }

          res.end()
        } catch (error) {
          if (options.transaction) {
            await req.db.transaction.rollback()
          }

          next(error)
        }
    }
}

module.exports = asyncRouteHandler
