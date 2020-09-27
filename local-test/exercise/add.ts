import {v4 as uuidv4} from 'uuid'
import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()

module.exports.add = (event, _context, callback) => {
  let text;
  const timestamp = new Date().getTime()

  // const data = JSON.parse(event.body)
  // if (typeof data.text !== 'string') {
  //   console.error('Validation Failed')
  //   callback(new Error('Couldn\'t create the todo item.'))
  //   return
  // }

  if (event.body !== null && event.body !== undefined) {
    let body = JSON.parse(event.body);
    if (body.text) {
      text = body.text;
    } {
      console.error('Validation Failed')
      callback(new Error('Couldn\'t create the todo item.'))
      return
    }
  }

  const params = {
    TableName: 'routine',
    Item: {
      id: uuidv4(),
      text: text,
      checked: false,
      createdAt: timestamp,
      updatedAt: timestamp
    }
  }

  // write the todo to the database
  dynamoDb.put(params, (error, _result) => {
    // handle potential errors
    if (error) {
      console.error(error)
      callback(new Error('Couldn\'t create the todo item.'))
      return
    }

    // create a response
    const response = {
      statusCode: 200,
      body: 'JSON.stringify(params.Item)'
    }
    callback(null, response)
  })
}
