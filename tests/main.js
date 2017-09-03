const assert = require('assert')

const index = require('../source/index.js')

{
  const body = index().body
  assert.equal(typeof body, 'string')

  console.info('Serve text/plain per default ✔︎')
}

{
  const body = index('text/plain').body
  assert.equal(typeof body, 'string')

  console.info('Serve text/plain on request ✔︎')
}

{
  const body = index('text/ansi').body
  assert.equal(typeof body, 'string')
  assert.equal(body.charCodeAt(0), 27) // Escape sequence

  console.info('Serve text/ansi on request ✔︎')
}

{
  const body = index('text/html').body
  assert.equal(typeof body, 'string')
  assert(body.includes('</h1>'))

  console.info('Serve text/html on request ✔︎')
}
