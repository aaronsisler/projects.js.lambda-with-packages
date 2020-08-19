/* eslint-disable import/prefer-default-export */
const health = (_event, _context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("We are working!")
  };

  callback(null, response);
};

export { health };
