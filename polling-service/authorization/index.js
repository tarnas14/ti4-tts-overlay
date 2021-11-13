const express = require('express')
const router = express.Router()

const {asyncRouteHandler} = require('../infra')
const getAccessToken = require('./getAccessToken.route')

router.get('/getAccessToken', asyncRouteHandler(getAccessToken))

module.exports = {
  router
};
