// This will hold the environment specific data


// const cfenv = require('cfenv')
// const appEnv = cfenv.getAppEnv();

const environment = {

    appName : process.env.APP_NAME,
    dbUrl : process.env.DB_URL,
}

module.exports = environment;