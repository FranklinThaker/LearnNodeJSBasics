const http = require('http');
url = process.argv[2];

http.get(url, fetching);

function fetching(response){
    response.setEncoding('utf8');
    response.on("data", console.log);
    response.on("error",console.error);
}