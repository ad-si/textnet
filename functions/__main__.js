const textnet = require('../source/index')

/**
* Get text of textnet landing page
* @returns {buffer}
*/
// eslint-disable-next-line id-blacklist
module.exports = (context, callback) => {
  const headers = context.http.headers

  const responseObj = textnet(
    headers.accept,
    headers['user-agent'],
  )

  callback(
    null,
    new Buffer(responseObj.body),
    responseObj.headers
  )
}
