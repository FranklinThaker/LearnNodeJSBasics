const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, contents) {
    if (err)    return callback(err);
    
    contents = contents.filter(function (file) {
      return path.extname(file) === '.' + ext
    })

    callback(null, contents)
  })
}
