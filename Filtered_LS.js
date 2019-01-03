let fs = require('fs');
const path = require('path');

let folder = process.argv[2];
let ext = "." + process.argv[3];

files = fs.readdir(folder, listingFiles);

function listingFiles(err, contents){
    contents.forEach(function (file){
        if(path.extname(file) === ext) console.log(file);
    })
}