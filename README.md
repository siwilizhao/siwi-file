[![Build Status](https://www.travis-ci.org/siwilizhao/siwi-file.svg?branch=master)](https://www.travis-ci.org/siwilizhao/siwi-file)
[![npm](https://img.shields.io/npm/v/siwi-file.svg)](https://www.npmjs.com/package/siwi-file)
[![npm](https://img.shields.io/npm/dt/siwi-file.svg)](https://www.npmjs.com/package/siwi-file)
[![Github file size](https://img.shields.io/github/size/siwilizhao/siwi-file/lib/index.js.svg)](https://github.com/siwilizhao/siwi-file/lib/index.js)

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

> code example download nodejs pkg

```js
(async () => {
    const path = require('path')
    const { file }  = require('./index')
    const url = 'https://nodejs.org/dist/v11.11.0/node-v11.11.0.pkg'
    const savepath = path.resolve('./storage', 'node-v11.11.0.pkg')
    try {
        await file(url, savepath)
        console.log('下载完成');
    } catch (error) {
        console.trace(error)
    }
})()
```

> run node test.js  

```shell
node test.js
```

![siwi-file-demo](images/siwi-file-demo.gif)
## Test

```js
const expect = require('chai').expect
describe('siwi-file.js', () => {
    it('file', async () => {
        const { file } = require('../lib')
        const fs = require('fs')
        const path = require('path')
        const url = 'https://mac-torrent-download.net/wp-content/uploads/tr-files/2019-q1/50c621b678278d22e81056cbb9827694.torrent'
        const basename = path.basename(url)
        const savepath = path.resolve('./storage/torrents', `${basename}`)
        await file(url, savepath)
        const res = fs.existsSync(savepath)
        expect(res).to.be.equal(true)
    });
});
```