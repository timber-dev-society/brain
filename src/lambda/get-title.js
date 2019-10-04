import request from 'request'
import cheerio from 'cheerio'

exports.handler = (event, context, callback) => {
  if (typeof event.queryStringParameters.url === 'undefined') {
    callback(null, {
      statusCode: 500,
      body: 'invalid url',
    })

    return
  }

  request(event.queryStringParameters.url, (error, response, body) => {
    if (error) {
      callback(null, {
        statusCode: 500,
        body: error,
      })

      return
    }

    const ch = cheerio.load(body)
    const title = ch('title').text()

    callback(null, {
      statusCode: response.statusCode,
      body: `{ "title": "${title}" }`,
    })
  })
}
