const server = require('./app');
const PORT = process.env.NODE_ENV_PORT || 3002;

// Listen on port 3001
// An error handling function would be suitable here

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});