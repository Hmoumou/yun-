var express = require('express');
var router = express.Router()
const user = require('../controller/user')
const article = require('../controller/article')
const category = require('../controller/category')

/* GET home page. */
router.use(user)
router.use(article)
router.use(category)

module.exports = router;
