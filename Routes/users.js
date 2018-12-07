var logic = require('../logic/users');
var express = require('express')
var router = express.Router();

router.post('/register', function (req, res) {
    var user = req.body;
    logic.Add(user);
});
module.exports = router;