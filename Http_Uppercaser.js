let data='';
const map = require('through2-map')
const fs = require('fs');
let port = Number(process.argv[2]);
const http = require('http');
const host = '127.0.0.1';

const server = http.createServer(function (req,res){
    if(req.method != 'POST'){
        return res.end("send me a post request");
    }
        res.on('data', (chunk) => {
            data+=chunk;
        });
        /*res.on('end', () => {
            data = data.toString();
            console.log(data.toUpperCase());
        });*/
        
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
          })).pipe(res)
    }
);
server.listen(port,host);
console.log('Listening at http://' + host + ':' + port);

