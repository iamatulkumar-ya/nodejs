'use strict' // declaring this such that we do use all ES5 standards

// importing express such that we can create instance of Router
var express = require('express');
const  v1Template = require('./v1Template'); // by default route template

// creating instance of Router 
const router = express.Router(), // eslint -disable new line cap
    streetUserRouter = require('./streetUsers.router')
 


// Defining default route functionality - prefix will be v1 which will be get added in app.js file itself
router.get('/', function(req, res){
    res.send(v1Template)
})

// Creating or assigning paths to the routes, will assign parent path only

router.use('/StreetUsers', streetUserRouter)

module.exports = router;



