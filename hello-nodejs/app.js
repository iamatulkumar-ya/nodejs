
// MongoDB Connectivity
var mongoose = require('mongoose');
 

// connecting to database
 var db = mongoose.connect('mongodb://localhost:27017/NodeJsStreetDB'); // we are connected now

// importing express to use basic feature of its that will make this app run on the port
var express = require('express');

// importing port number on which our application will run
// importing default routes 
 var appConstants = require('./assets/constantFiles/appConstants');

// Creating a instance for express
var app = express(); 
//var env = require('./components/environment')

// importing body-parser to make use of post operation to post the data into json format
var bodyParser= require('body-parser')


//const  v1Template = require('./routers/v1Template');
 
// importing the router which we want to show when user go to that path
//const  streetUserRoute = require('./routers/streetUsers.router');


 

 
// default get Method
  // app.get(routeConstants.route_Prefix, function(req, res) {
  //   res.send(v1Template);
  //   console.log(env.appName)
  // })
  
// Below is the code that makes other app to communicate with it
// app.use(function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

 // assigning user of body-parser such that we can use post operation
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))

 // assigning all the routes 

 var router = require('./routers/index.router')
 //app.use(routeConstants.route_Prefix, streetUserRoute); 
 app.use(appConstants.route_Prefix, router); 

// declaring below listen method which will listen on the assigned port number
 app.listen(appConstants.portNumber, function() {
    // console.log('Running on port ' + port);
  //  console.log(env.appName)
 })
 
