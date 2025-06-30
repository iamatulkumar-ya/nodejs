// In this file we will declare our model as per our collection
// importing mongoose package to use the Schema 
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var appConstants = require('../assets/constantFiles/appConstants');

var streetUsersModel = new Schema(
    {
        userID: { type: 'number'},
        userFirstName: { type: 'string'},
        userLastName: { type: 'string'},
        userAddress: { 
            userCity: { type: 'string'},
            userState: { type: 'string'},
            userPinCode: 'number'
        },
        userContact: { type: 'number'}

    });
 
 

// Below is going to add a new model called 'streetUser' into mongoose.Schema
// which later can be accessed using 'streetUser'

// either we can pass collection name separately to tell mongo that this model is belongs to this collection
//module.exports = mongoose.model('User', userModel, 'UserCollection')

// Or we can have singular name of the actual collection 
// model name: streetusers , Actual Collection: streetusers (should be in lower case)
// module.exports = mongoose.model('streetUser',streetUserModel)

// we are passing explicit collection name
module.exports = mongoose.model('streetUsersModel',streetUsersModel, appConstants.collections.streetUsersCollection)


