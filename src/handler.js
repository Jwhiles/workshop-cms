var http = require('http');
var path = require('path');
var fs = require('fs');
var querystring = require('querystring');
var post;

function handler(request,response){
  var url = request.url;
  var extension = path.extname(url).substring(1);

  if (url === "/") {
    response.writeHead(200,{"Content-type": "text/html"});
    fs.readFile(__dirname+"/../public/index.html",function(err,file){
      if (err) {throw err;}
      response.end(file);
    });
  } else if (url === "/create/post") {
    response.writeHead(303, {"location": "/../index.html"});
    var allData = '';
    request.on('data', function (chunkOfData) {
      allData += chunkOfData;
    });
    request.on('end', function () {
      post = querystring.parse(allData);
      console.log(post);
      response.end();
    })
  } else {
    response.writeHead(200,{"Content-type": "text/"+extension});
    fs.readFile(__dirname+"/../public/" + url, function(err,file){
      if (err) {throw err;}
      response.end(file);
    })
  }
}
module.exports = handler;
