const express = require('express')
const router = express.Router()

const {asyncRouteHandler} = require('../infra')

router.get('/', asyncRouteHandler(async function(req, res, next) {
  const result = await req.db.query('SELECT 1 as test')

  return { json: result.rows }
}))

router.post('/', asyncRouteHandler(async function(req, res, next) {
    // const {body: session, dbConnection} = req

    // const results = await dbConnection.query(`SELECT NOW() `)
    // console.log(results)

    // read body
    // connect postgres
    // save
}))

module.exports = router
