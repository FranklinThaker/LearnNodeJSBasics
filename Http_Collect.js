const http = require('http');
let url = process.argv[2];

http.get(url, fetching);

function fetching(resp){
    let data='';
    resp.on('data', (chunk) => {
        data+=chunk;
    });
    resp.on('end', () => {
        //console.log(JSON.parse(data).explanation);
        //console.log(data);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    });
}