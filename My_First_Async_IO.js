let fs = require("fs");
try{
fs.readFile(process.argv[2], finishReading)
}
catch(err){
    console.log("error occured ", err);
}

function finishReading(err, contents){
    if(err) return console.log("Error in reading file");
    let count = contents.toString().split('\n').length -1;
    console.log(count);
}
