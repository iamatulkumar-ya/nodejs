# This file will let you know how to begin with NodeJs Application

1.  # Install NodeJs on your machine

    in the cmd use node -v command to check the installed version on your machine.

2.  # Setup Working Directory: Go to working Directory:

    2.1 > mkdir nodejsstreet : Creating a folder such that we can store files over there

    2.2 > cd NodeJsStreet : Going inside newly created folder

3.  # Adding package.json file in your solution

    3.1 nodejsstreet> npm init

    3.2 Once you execute above command, interface will ask for below details:

    3.2.1 package name : <nodejsstreet> nodejsstreet (giving same name as app name: should be in lower case)

        3.2.2 version : <1.0.0> (skipping to give new value by hitting enter button)

        3.2.3 description: To learn about nodejs

        3.2.4 entry point: <index.js> app.js (changing it from index.js to app.js)

        3.2.5 test command: (skipping to give new value by hitting enter button)

        3.2.6 git repository: https://github.com/LearningStreets/NodeJsStreet.git (giving mine git repo, you can skip by hitting enter button)

        3.2.7 keywords: (skipping to give new value by hitting enter button)

        3.2.8 author: Learning Streets

        3.2.9 license: <ISC> (skipping to give new value by hitting enter button)

    3.3 Once you provide above details then one confirmation text will come, press enter and continue

    3.4 Now check your working directory you will have package.json file created over there.

4.  # Open the working directory in your visual studio code or any other IDE. (check helloworld_app.js file)

    4.1 Let's create 'app.js' file by adding new file and name as app.js and add below content

        var msg = "Node: Hello World Program"
        console.log(msg);

    4.2 Go back to command prompt of your working directory and execute below command
    nodejsstreet> node app.js
    Output: Node: Hello World Program

5.  Great! we have done the hello world program but wait! we have not run on browser. To do so we have to install additional package and add some extra code into the application.

6.  # To start further we will use 'express' package that will help us to create the nodejs application. express is a framework which help us by providing basic building blocks for nodejs application.

# Note: Please read - Express_Readme.md file to addon more things into this application

# Note: Kindly read the NodeJsStreet_Readme.md file to understand the architecture of this application.
