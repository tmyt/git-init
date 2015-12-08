const exec = require('child_process').exec

module.exports = init

// initialize a git repo
// (str, fn) -> null
function init (path, bare, cb) {
  if (typeof bare === 'function') {
    cb = bare
    bare = false
  }
  if (typeof path === 'function') {
    cb = path
    bare = false
    path = ''
  }
  path = path || ''
  exec('git init -q ' + (bare ? '--bare ' : '') + path, cb)
}

