import request from 'request'
import cheerio from 'cheerio';

exports.handler = (event, context, callback) => {
  if (event.queryStringParameters.url === undefined) {
    callback(null, {
      statusCode: 500,
      body: "invalid url"
    })
  }

  request(event.queryStringParameters.url, function (error, response, body) {
    if (error) {
      callback(null, {
        statusCode: 500,
        body: error
      })
    }

    const $ = cheerio.load(body);
    const title = $('title').text();

    callback(null, {
      statusCode: response.statusCode,
      body: `{ "title": "${title}" }`
    })
  })
}
