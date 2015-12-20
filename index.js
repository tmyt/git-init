const exec = require('child_process').exec

module.exports = init

// initialize a git repo
// (str, fn) -> null
function init (path, bare, template, cb) {
  if (typeof template === 'function') {
    cb = template;
    template = '';
  }
  if (typeof bare === 'function') {
    cb = bare
    template = '';
    bare = false
  }
  if (typeof path === 'function') {
    cb = path
    template = '';
    bare = false
    path = ''
  }
  path = path || ''
  exec('git init -q ' + (bare ? '--bare ' : '')  + (template !== '' ? '--template=' + template + ' ' : '') + path, cb)
}

