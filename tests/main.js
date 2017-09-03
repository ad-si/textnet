const assert = require('assert')

const index = require('../index.js')

index.main(
  {headers: {}},
  null,
  (error, response) => {
    assert.equal(error, null, error)
    assert.equal(typeof response.body, 'string', response.body)
    console.info(response.body.charCodeAt(0))
    console.info('Correctly serve text/plain ✔︎')
  }
)

index.main(
  {headers: {Accept: 'text/ansi'}},
  null,
  (error, response) => {
    assert.equal(error, null)
    assert.equal(typeof response.body, 'string')
    assert.equal(response.body.charCodeAt(0), 27) // Escape sequence

    console.info('Correctly serve text/ansi ✔︎')
  }
)

index.main(
  {headers: {Accept: 'text/html'}},
  null,
  (error, response) => {
    assert.equal(error, null)
    assert.equal(typeof response.body, 'string')
    assert(response.body.includes('</h1>'))

    console.info('Correctly serve text/html ✔︎')
  }
)
