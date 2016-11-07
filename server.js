var http = require('http');
var fs = require('fs')
var message = 'I am complacent about being in a girl group';
var nodeMessage = 'I am a little node, I have a little toad';
var girlsMessage = 'teapot teapot teapot teapot teapoteteapot teapot teapot teapot teapoteteapot teapot teapot teapot teapoteteapot teapot teapot teapot teapoteteapot teapot teapot teapot teapoteteapot teapot teapot teapot teapoteteapot teapot teapot teapot teapoteteapot teapot teapot teapot teapoteteapot teapot teapot teapot teapoteteapot teapot teapot teapot teapote'


function handler(request, response){
  var endpoint = request.url;
  console.log(endpoint);
  if (endpoint === '/') {
    response.writeHead(200, {"content-type": "text/html"});

    fs.readFile(__dirname + '/public/index.html', function (err, file){
      if (err) {
        console.log(err);
        return;
      }
      response.end(file);
    })
  } else if (endpoint === '/node') {
    response.writeHead(200, { "content-type": "text/html" });
    response.end(nodeMessage);
  } else if (endpoint === '/girls') {
    response.writeHead(200, { "content-type": "text/html" });
    response.end(girlsMessage);
  } else {
    response.writeHead(200, {"content-type":"text/html"});
    response.write(message);
    response.end();
  }
};


var server = http.createServer(handler);

server.listen(3000,function(){
  console.log("Server is listening on port 3000.  Ready to accept requests!");
});
