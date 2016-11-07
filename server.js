var http = require('http');
var handler = require('./src/handler.js')

var server = http.createServer(handler);
console.log("Server directory name: ",__dirname);

server.listen(3000,function(){
  console.log("Server is listening on port 3000.  Ready to accept requests!");
});
