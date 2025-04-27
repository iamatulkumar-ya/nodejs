// creating varible for express module
const express = require('express'); 
const app = express() 
const port = 3000 // defining the port

// below is the code to allow the json body from request
app.use(express.json());

// app controllers
const searchmedicine_controller = require('./controllers/searchmedicine_controller')
const searchmedicine_controllerOBJ =  new searchmedicine_controller()

// API  
// default url - health check endpoint
app.get('/', (req, res) => { 
    res.send('Medicine Search API is running healthy.')
})
 

const verification = (req, res, next) =>{ 
    return res.status(401).json({ message: 'No token provided' });
}



// Search medicine endpoint 
app.get('/searchmedicine',  (req, res) => {  
    try
    {
        searchmedicine_controllerOBJ.validate_request_input(req.body);
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