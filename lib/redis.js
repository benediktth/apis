const Redis = require('redis')
const debug = require('debug')('redis')

const redis = Redis.createClient(process.env.REDIS_URL)

redis.on('connect', () => {
  debug('connected')
})

redis.on('error', (error) => {
  debug(error)
})

module.exports = redis
