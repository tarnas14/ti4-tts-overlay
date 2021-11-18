const express = require('express')
const router = express.Router()

const { asyncRouteHandler } = require('../infra')

const createSession = require('./createSession.route')

router.post('/', asyncRouteHandler(createSession))

module.exports = {
  router,
}
