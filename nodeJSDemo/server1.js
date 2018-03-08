var fs = require('fs'); //node filesystem 
var http = require('http');
var url = require('url');
var ROOT_DIR = "static/";
http.createServer(function (req, res) {
  // req: request, to get  info from client,
  //res: response, anything yo uwant to send to client, put it in res
  var urlObj = url.parse(req.url, true, false);
  if(req.method=='GET')
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
      if (err) {
        res.writeHead(404); //404 means error
        res.end("<h1>The web page does not exist!<h1>");
        return;
      }
      res.writeHead(200);//200 means ok
      res.end(data);
    });
  else
    if(req.method=='POST')
    {
      req.on('data', chunk=>
         console.log("chunk arrived"+ chunk))
      res.writeHead(200)
      res.end("Thank for login")

    }
}).listen(8000);
console.log("Server is runung at port 8000.")