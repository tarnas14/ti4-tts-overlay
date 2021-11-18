const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('before render')
  console.log(req)
  res.render('index', { title: 'Express' });
  console.log('after render')
});

module.exports = router;
