const path = require('path')

function plugin (options) {
  options = options || {}

  function createFiles(files, file, alias) {
    const newName = path.join(alias, 'index.html')
    files[newName] = Object.create(files[file.oldName])
    const newFile = files[newName]

    if (options.redirect) {
      // Redirect to permalink location
      const redirectBuffer = new Buffer(`
        <meta http-equiv="refresh" content="0; url=/${newFile.permalink}">
        <link rel="canonical" href="/${newFile.permalink}" />
      `)
      const orginalBuffer = newFile.contents
      newFile.contents = Buffer.concat([redirectBuffer, orginalBuffer])
    }
  }

  return function(files, metalsmith, done) {
    Object.keys(files).map(file => Object.assign(files[file], {oldName: file}))
      .filter(file => file.aliases !== undefined)
      .forEach(file => {
        if (Object.prototype.toString.call(file.aliases) === '[object Array]') {
          file.aliases.forEach((alias, i) => {
            file.aliases[i] = alias;
            createFiles(files, file, alias)
          })
        } else {
          file.aliases = alias;
          createFiles(files, file, alias)
        }
      });
    done();
  }
}

module.exports = plugin;