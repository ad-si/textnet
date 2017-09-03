const sun = require('../source/sun')

/**
* Get list of sunrise, solar noon, sunset, nadir and current time
* @returns {buffer}
*/
// eslint-disable-next-line id-blacklist
module.exports = (context, callback) => {
  const responseObj = sun()

  callback(
    null,
    new Buffer(responseObj.body),
    responseObj.headers
  )
}
