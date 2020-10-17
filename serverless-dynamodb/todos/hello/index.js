export const hello = async function hello(event, _context, _callback) {
  const response = {
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  console.log('_context', _context);

  return response;
};
