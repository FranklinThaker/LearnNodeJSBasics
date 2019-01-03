let http = require("http");
let fs = require("fs");
let portNumber = process.argv[2];
let fileLocation = process.argv[3];
let server = http.createServer(function (req, res) {  
   // request handling logic...  
   let src = fs.createReadStream(fileLocation);
   src.pipe(res);
 })  
 server.listen(portNumber);