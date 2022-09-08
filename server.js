const http = require('http')
const fs = require('fs')

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}    /*zamena callbeka Promisami*/
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject('500, some error occurred')
            else resolve(data)

        })
    })}


    const server = http.createServer(async (request, response) => {

        switch (request.url) {
            case'/home': {
                /*const data = fs.readFileSync('pages/home.html')  response.write(data)  /!*sinhronno*!/*/
                const data = await readFile('pages/home.html')    /* await delaet obriv datb chitatb fail*/
                response.write(data)
                response.end()
                /* fs.readFile('pages/home.html', (err, data) => {
                     if (err) response.write('500, some error occurred')
                     else response.write(data)
                     response.end()                                            callback
                 })
                 break*/
            }
            case'/about': {
                await delay(3000)
                response.write('ABOUT COURSE')
                response.end()

                break
            }
            default: {
                response.write('404 not found')
                response.end()
            }
        }


    })

    server.listen(3003)
