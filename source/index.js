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
      'content-type': getContentType(mimeType, subType),
      // 'content-disposition': 'inline',
      // 'x-content-type-options': 'nosniff',
      vary: 'Accept-Encoding',
    },
    body: body,
  }
}

function ansifyResponse (response) {
  response.headers['content-type'] = getContentType('text', 'ansi')
  response.body = marked(response.body, {
    renderer: new MarkedTerminal(),
  })
}

function htmlifyResponse (response) {
  response.headers['content-type'] = getContentType('text', 'html')
  response.body =
    '<!doctype html>' +
    '<title>Textnet - The Internet of Text</title>' +
    marked(response.body)
}

module.exports = (acceptHeader, userAgent) => {
  const response = getResponse(content)

  // Check for exact matches to only convert explicit requests
  if (acceptHeader === 'text/html') {
    htmlifyResponse(response)
  }
  else if (acceptHeader === 'text/ansi') {
    ansifyResponse(response)
  }
  else if (acceptHeader === 'text/plain') {
    // Keep response as is
  }
  else {
    // Only thoses browsers handle text/markdown correctly
    if (/(chrome|safari)/i.test(userAgent)) {
      response.headers['content-type'] = getContentType('text', 'markdown')
    }
    // Can display ansi escape sequences
    else if (/(curl|httpie)/i.test(userAgent)) {
      ansifyResponse(response)
    }
  }

  return response
}
