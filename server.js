// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORT = 5000;

const handleRequest = (request, response) => {  
  
  response.end(`The path is LIVE!! ${request.url}`);
};


const server = http.createServer(handleRequest);


server.listen(PORT, () => {  
  
  console.log(`Server listening on: http://localhost:${PORT}`); 
});
