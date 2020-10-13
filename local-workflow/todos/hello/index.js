import runWarm from '../../utils/runWarm';

console.log('HELLO', process.env.HELLO);
console.log('DYNAMO_TABLE_NOTES', process.env.DYNAMO_TABLE_NOTES);

export const hello = async function hello(event, _context, _callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  console.log('_context', _context);

  return response;
};

// Export the hander wrapped in the "run warm" utility which will handle events
// from the scheduler, keeping our actual handler logic clean.
// export default runWarm(hello);
