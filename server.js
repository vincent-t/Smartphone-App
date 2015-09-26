// install: npm install pushstate-server
// start: nodejs server.js or ./startserver.sh
// adress: http://localhost:8080/

// Defines
const PORT=8080;
const DIR='./www';

// Create server
var server = require('pushstate-server');

// Start server
server.start({ port: PORT, directory: DIR })
