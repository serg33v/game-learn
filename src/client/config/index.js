const devConfig = require('./dev');
const prodConfig = require('./prod');

const envConfig = {
    development: devConfig,
    production: prodConfig,
};
module.exports = envConfig[process.env.NODE_ENV];
