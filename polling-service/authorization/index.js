const express = require('express')
const router = express.Router()

const { asyncRouteHandler } = require('../infra')

const getAccessToken = require('./getAccessToken.route')
const authenticate = require('./authenticate.middleware')

router.get('/getAccessToken', asyncRouteHandler(getAccessToken))

module.exports = {
  router,
  authenticate,
}
