[![Build Status](https://travis-ci.org/siwilizhao/siwi-file.svg?branch=master)](https://travis-ci.org/siwilizhao/siwi-file)
[![npm](https://img.shields.io/npm/v/siwi-file.svg)](https://www.npmjs.com/package/siwi-file)
[![npm](https://img.shields.io/npm/dt/siwi-file.svg)](https://www.npmjs.com/package/siwi-file)
[![Github file size](https://img.shields.io/github/size/siwilizhao/siwi-file/dist/index.js.svg)](https://github.com/siwilizhao/siwi-file/lib/index.js)

# siwi-file
file download for nodejs
# install

## use npm 

` npm install siwi-file`

## use yarn

` yarn add siwi-file`

# test

`npm test`

# Example

```js
(async () => {
    const { file } = require('siwi-file')
    while (true) {
        console.log(1)
        await file(url, savepath)
    }
})()
```

> console 1 sleep 1s 