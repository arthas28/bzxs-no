const path = require('path')

const config = {
    debug: true,
    description: 'BZXS.com is coming.',
    keywords: 'Funny',

    session_secret: 'baxs_secret',

    // redis 配置，默认是本地
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_db: 0,
    redis_password: '',

    PUBLIC_CDN: '',

    NODE_ENV: process.env.NODE_ENV
}

if (process.env.NODE_ENV === 'production') {

    if(process.env.REDIS_HOST) {
        config.redis_host = process.env.REDIS_HOST
    }

    if(process.env.CDN_HOST) {
        config.PUBLIC_CDN = '//' + process.env.CDN_HOST   
    }
}

module.exports = config
