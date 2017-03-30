const fs = require('fs');

function plugin (options) {
  options = options || {}

  return function(files, metalsmith, done) {
    const outFile = fs.createWriteStream("nginx.conf");

    outFile.once('open', function(fd) {
      Object.keys(files).map(file => Object.assign(files[file], {oldName: file}))
        .filter(file => file.aliases !== undefined)
        .forEach(file => {
          if (Object.prototype.toString.call(file.aliases) === '[object Array]') {
            file.aliases.forEach((alias, i) => {
              file.aliases[i] = alias;
              outFile.write('location /' + alias + ' { return 301 /' + file.path + '; }\n');
            })
          }
        });
      outFile.end();
    });
    done();
  }
}

module.exports = plugin;