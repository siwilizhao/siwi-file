const expect = require('chai').expect
describe('/lib/index.js', () => {
    it('check', async () => {
        const { checkFile } = require('../lib')
        const url = 'https://mac-torrent-download.net/wp-content/uploads/tr-files/2019-q1/50c621b678278d22e81056cbb9827694.torrent'
        const res = await checkFile(url)
        console.log(res)
    });
});