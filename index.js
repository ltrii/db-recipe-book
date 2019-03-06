const express = require('express')

const server = express()
server.use(express.json())

const router = require('./routers/routes')

server.use('/', router)

//Listening
const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});