var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('readstreaminput.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('readstreaminput.txt.gz'));
  
console.log("File Compressed.");