const ncli = require('@tiaanduplessis/ncli') // eslint-disable-line

ncli({
  onStdin: data => console.log(`${data}`),
  num: val => console.log(`The num is ${val}`),
  help: `
      --name Print name
      
      `,
  version: '1.0.0',
})
