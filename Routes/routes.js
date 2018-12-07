var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router();
var userRoutes = require('./users')




module.exports = function Router(app) {


    app.use(bodyParser.json());
    app.use('/users', userRoutes);

    router.stack.forEach(function (r) {
        if (r.route && r.route.path) {
            console.log(r.route.path)
        }
    })

}