let fs = require('fs');
const path = require('path');
const Filtering = require('./Module_Demo');

let folder = process.argv[2];
let ext = process.argv[3];

Filtering(folder, ext, function(err,contents){
    if(err) console.log(err);
contents.forEach(function (file){
    console.log(file);
})

})



