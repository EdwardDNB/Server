const http = require('http')

const server = http.createServer((request, response) => {

    switch (request.url) {
        case'/home': {
            const start = new Date()
            while (new Date(5000) - start < 5000) {
                console.log(new Date() - start < 5000)
            }
            const data = 'best course'
            response.write(data)
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