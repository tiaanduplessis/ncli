const parse = require('get-them-args')
const getStdin = require('get-stdin')

module.exports = function ncli(options = {}) {
  const args = parse()
  const keys = Object.keys(args).filter(key => key !== 'unknown')

  keys.forEach((key) => {
    if (options[key]) {
      const val = args[key]
      if (typeof options[key] === 'function') {
        options[key](val)
      } else {
        console.log(options[key])
      }
    }
  })

  if (options.onStdin) {
    getStdin().then(data => options.onStdin(data, args))
  }
}
