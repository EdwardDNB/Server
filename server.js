const http = require('http')

const server = http.createServer((request, response) => {

    switch (request.url) {
        case'/home': {
            const start = new Date()
            while (new Date(3000) - start < 3000) {
                console.log(new Date() - start < 3000)
            }
            const data = 'best course'
            response.write(data)
            break
        }
        default: {
            response.write('404 not found')

        }
    }
    response.end()

})

server.listen(3003)