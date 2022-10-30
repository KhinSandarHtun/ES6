const path = require('path')
const fs = require('fs');

module.exports = rootDir = path.join(__dirname,"..");

module.exports = deleteFile = (fileName) => {
    fs.unlink(path.join(rootDir, fileName), (err) => {
        if(err) console.log(err);
    });
};