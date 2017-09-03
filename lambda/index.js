const fs = require('fs')

const marked = require('marked')
// Force marked-terminal > chalk to use color
process.env.FORCE_COLOR = 1
const MarkedTerminal = require('marked-terminal')

const content = fs.readFileSync('./readme.md', 'utf-8')

function getContentType (
  mimeType = 'text',
  subType = 'plain',
  charset = 'utf-8'
) {
  return `${mimeType}/${subType}; charset=${charset}`
}

function getResponse (body, mimeType, subType) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': getContentType(mimeType, subType),
      // 'Content-Disposition': 'inline',
      // 'X-Content-Type-Options': 'nosniff',
    },
    body: body,
  }
}

function ansifyResponse (response) {
  response.headers['Content-Type'] = getContentType('text', 'ansi')
  response.body = marked(response.body, {
    renderer: new MarkedTerminal(),
  })
}

function htmlifyResponse (response) {
  response.headers['Content-Type'] = getContentType('text', 'html')
  response.body =
    '<!doctype html>' +
    '<title>Textnet - The Internet of Text</title>' +
    marked(response.body)
}

function main (event = {}, context, requestCallback) {
  const accept = event.headers && event.headers.Accept
    ? event.headers.Accept
    : ''
  const userAgent = event.headers && event.headers['User-Agent']
    ? event.headers['User-Agent']
    : ''
  const response = getResponse(content)

  // Check for exact matches to only convert explicit requests
  if (accept === 'text/html') {
    htmlifyResponse(response)
  }
  else if (accept === 'text/ansi') {
    ansifyResponse(response)
  }
  else {
    // Only thoses browsers handle text/markdown correctly
    if (/(chrome|safari)/i.test(userAgent)) {
      response.headers['Content-Type'] = getContentType('text', 'markdown')
    }
    // Can display ansi escape sequences
    else if (/(curl|httpie)/i.test(userAgent)) {
      ansifyResponse(response)
    }
  }

  requestCallback(null, response)
}

module.exports = {main}
