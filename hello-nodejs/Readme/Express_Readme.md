# Note: Before getting started, If you have not done basic app setup then I would request to go through 'AppSetup_Readme.md' file for the basic setup.

# So, once we have our basic application is ready then we can add things to it which makes the NodeJs to more powerful.

# We will add one package 'express' which will allow us to run our application onto some 'port', also it will allow us to connect to 'database'. Let's start with basics first

1.  # Let's install express package

    1.1 Installing express package as globally: npm install -g express

    1.2 Let's install to our project as well. nodejsstreet> npm install express. Once this gets completed we can see an entry for "express" package in our package.json file under "dependencies".

    1.3 Additional task, add "start" script in the package.json file under "scripts" property. Let's add below:
    "start" : "node app.js"

2.  # Modify app.js (check basicgetoperation_app.js file)

    2.1 Modify app.js file by adding below code:

        var express = require('express');
        var app = express();
        var port = 3005;

        app.get('/', function(req, res) {
            res.send('Node: Hello World Program');
        })

        app.listen(port, function() {
            console.log('Logging this - Node: Hello World Program')
        })

    2.2 Once done with modifying app.js file, open the cmd for the directory and run below command:
    npm start

    2.3 Open http://localhost:3005/ to see the message.

3.  # We are all done now. Happy Coding!

4.  # Optional: Hot loading

    4.1 To get real time changes on UI as soon as you modify your code(refresh is required on browser) then we need to install one package; nodemon.

    4.2 npm install nodemon

    4.3 Once above package is installed now, change the "start" script as below:
    "start" : "nodemon app.js"

    4.4 Re-run the npm start on command line and now you will have hot loading enabled in your code. Do check by modifying your message and save it. Refresh the browser. Bingo! it's changing like charm.

# Perfect! As we have done the basics of the things let's go through some productive implementation part of it

# Note: Kindly read the NodeJsStreet_Readme.md file to understand the architecture of this application.
