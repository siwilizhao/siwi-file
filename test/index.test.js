const expect = require('chai').expect
describe('/lib/index.js', () => {
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