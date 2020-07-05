module.exports = {
    apps: [{
        name: 'oneturn',
        script: 'src/server/index.js',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production',
        }
    }]
};
