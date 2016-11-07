var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var path = require('path');


// mesages
var message = 'I am complacent about being in a girl group';
var nodeMessage = 'I am a little node, I have a little toad';
var girlsMessage = 'teapot teapot teapot teapot';





function handler(request, response){
  var endpoint = request.url;
  var extension = path.extname(endpoint).substring(1);
  if (endpoint === '/') {
    response.writeHead(200, {"content-type": "text/html"});
    console.log("Handlers directory name: ",__dirname + "..");

    fs.readFile(__dirname + '/../public/index.html', function (err, file){
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
  } else if(endpoint === "/create-post"){
    response.writeHead(303, { "Location": "/index.html" });
    var allTheData = "";
    request.on('data', function(chunkOfData){
      allTheData += chunkOfData;
    });
    request.on('end', function(){
      var convertedData = querystring.parse(allTheData);
      response.end();
    })

  } else {
    response.writeHead(200, {"content-type":"text/" + extension});
    fs.readFile(__dirname + '/../public'+endpoint, function(err,file){
      if (err) {
        console.log(err);
        return;
      }
      response.end(file);
    })
  }
};

module.exports = handler;
