/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-02-22 17:17:16
 * @modify date 2019-02-22 17:17:16
 * @desc [siwi-file.js file download for nodejs]
 */

const path = require('path')
const fs = require('fs')
const http = require('http')
const https = require('https')
const mkdirs = require('siwi-mkdirs')
const ProgressBar = require('progress')

class SiwiFile {
    constructor() {}

    /**
     * download file for nodejs
     *
     * @param {*} url
     * @param {*} savepath
     * @param {boolean} [headers=false]
     * @returns 
     * @memberof SiwiFile
     */


     
    async file(url, savepath) {
        return new Promise(async (resolve, reject) => {

            const dirname = path.dirname(savepath)
            if (!fs.existsSync(dirname)) {
                await mkdirs.multi(dirname)
            }
            const {
                host,
                hostname,
                protocol,
                pathname,
            } = new URL(url)

            const options = {
                host: host,
                hostname: hostname,
                path: `${pathname}`,
                method: 'GET',
            }
            const r = protocol == 'http:' ? http : https
            const req = r.request(options, (res) => {
                const {
                    statusCode,
                    statusMessage
                } = res
                const total = res.headers["content-length"]
                if (statusCode !== 200) {
                    res.resume()
                    reject(new Error(`statusCode: ${statusCode} statusMessage: ${statusMessage}`))
                }
                const bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
                    complete: '=',
                    incomplete: '-',
                    width: 100,
                    total: Number(total)
                })
                res.setEncoding('binary')
                const defaults = {
                    flags: "w",
                    encoding: "binary",
                    fd: null,
                    mode: 0o666,
                    autoClose: true
                };
                const stream = fs.createWriteStream(savepath, defaults)
                res.on('data', chunk => {
                    stream.write(chunk)
                    if(!bar.complete) {
                        bar.tick(chunk.length)
                    }
                })
                res.on('error', err => {
                    console.trace(err)
                    res.resume()
                    reject(false)
                })
                res.on('end', () => {
                    resolve(true)
                })
            })
            req.end()
        }).catch(error => {
            console.trace(error)
            return false
        })
    }
}

module.exports = new SiwiFile()