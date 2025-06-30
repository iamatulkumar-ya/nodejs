// importing status from http-status module for standards code
const  { status } = require('http-status');
// creating varible for express module
const express = require('express');
// creating instance of the function
const app = express() 
// defining the port
const port = 3000 

// below is the code to allow the json body from request
app.use(express.json());

// loading env 
require('dotenv').config();

// API  
// default url - health check endpoint
app.get('/', (req, res) => { 
    res.status(status.OK).send('Medicine Search API is running healthy.')
})
 

const verification = (req, res, next) =>{ 
    return res.status(401).json({ message: 'No token provided' });
}



// Search medicine endpoint 
app.get('/searchmedicine',  (req, res) => {  
    try
    {
        // route Handlers
        const SearchMedicineHandler = require('./src/route_handlers/searchMedicineHandler.js');
        const SearchMedicineHandlerOBJ =  new SearchMedicineHandler()

        SearchMedicineHandlerOBJ.validate_request_input(req.body);
    }
    catch (err) {
        console.log(err);
        res.status(err.statusCode).send({ message: err.message });
    }
})


app.get('/login', verification, (req, res) => {
    const error = new Error('Example error');
    error.statusCode = 404; // Set the desired HTTP status code 
    res.status(error.statusCode).send({ message: error.message });
  });

 
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})