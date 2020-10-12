const uuid = require('uuid');
const dynamodb = require('./dynamodb');

module.exports.create = (_event, _context, callback) => {
  const mockMessage = {
    body: 'hello',
    date_created: new Date().getTime(),
  };

  const response = {
    headers: { 'Access-Control-Allow-Origin': '*' }, // CORS requirement
    statusCode: 200,
  };

  response.body = JSON.stringify({
    message: 'Text message successfully sent!',
    data: { message: mockMessage },
  });

  console.log('response', response);

  callback(null, response);
};
