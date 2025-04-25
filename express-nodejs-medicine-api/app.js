// creating varible for express module
const express = require('express'); 
const app = express() 
const port = 3000 // defining the port


// API 

// default url - health check endpoint
app.get('/', (req, res) => { 
    res.send('Medicine Search API is running healthy.')
})

const verification = (req, res, next) =>{ 
    return res.status(401).json({ message: 'No token provided' });
}



// Search medicine endpoint 
app.get('/search_medicine', verification,  (req, res) => { 
     
    res.send('Medicine Search API is running healthy.')
})


app.get('/error', (req, res) => {
    const error = new Error('Example error');
    error.statusCode = 500; // Set the desired HTTP status code 
    res.status(error.statusCode).send({ message: error.message });
  });

 
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})