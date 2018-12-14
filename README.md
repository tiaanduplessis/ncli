
# @tiaanduplessis/ncli
[![package version](https://img.shields.io/npm/v/@tiaanduplessis/ncli.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/ncli)
[![package downloads](https://img.shields.io/npm/dm/@tiaanduplessis/ncli.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/ncli)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@tiaanduplessis/ncli.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/ncli)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Add a nifty CLI to your package

## Table of Contents

- [@tiaanduplessis/ncli](#tiaanduplessis-ncli)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [License](#license)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install @tiaanduplessis/ncli
$ # OR
$ yarn add @tiaanduplessis/ncli
```

## Usage

```js
const ncli = require('@tiaanduplessis/ncli') // eslint-disable-line

ncli({
  onStdin: data => console.log(`${data}`),
  num: val => console.log(`The num is ${val}`),
  help: `
      --name Print name
      
      `,
  version: '1.0.0',
})

```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    