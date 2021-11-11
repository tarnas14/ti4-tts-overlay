const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('before render')
  res.render('index', { title: 'Express' });
  console.log('after render')
});

module.exports = router;
