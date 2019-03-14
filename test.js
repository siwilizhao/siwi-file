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