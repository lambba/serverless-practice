import { v4 as uuidv4 } from 'uuid';
import runWarm from '../../utils/runWarm';
const dynamodb = require('../dynamodb');

// module.exports.create = (_event, _context, callback) => {
export const create = async function create(_event) {
  console.log('_event', _event);

  const response = {
    headers: { 'Access-Control-Allow-Origin': '*' }, // CORS requirement
    statusCode: 200,
  };

  response.body = JSON.stringify({
    message: 'Text message successfully sent!',
    data: {
      message: {
        body: 'created',
        createdAt: new Date().getTime(),
      },
    },
  });

  const params = {
    TableName: 'notes',
    Item: {
      id: uuidv4(),
      // text: data.text,
      // createdAt: new Date().getTime(),
      // updatedAt: new Date().getTime(),
    },
  };

  // callback(null, response);
  const dynamodbResult = await dynamodb.put(params, (error) => {
    if (error) {
      console.error(error);
      // callback(null, {
      //   statusCode: error.statusCode || 501,
      //   headers: { 'Content-Type': 'text/plain' },
      //   body: "Couldn't create the todo item.",
      // });
      // return;
      return {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: "Couldn't create the todo item.",
      };
    }
    // callback(null, response);
  });

  console.log('response', response);
  console.log('dynamodbResult', dynamodbResult);

  return response;
};

export default runWarm(create);
