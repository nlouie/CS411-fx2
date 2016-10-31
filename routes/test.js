/**
 * Created by nlouie on 10/31/16.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('test', { title: 'test page' });
});

module.exports = router;