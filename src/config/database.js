const config = require('./config');

module.exports = {
    //dev credentials
    development: {
        username: config.dbUser,
        password: config.dbPass,
        database: config.dbName,
        host: config.dbHost,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
};
