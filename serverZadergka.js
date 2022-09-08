const http = require('http')

const server = http.createServer((request, response) => {

    switch (request.url) {
        case'/home': {
            setTimeout(() => {
                const data = 'best course'
                response.write(data)
                response.end()
            }, 3000)   /* delegirovanie v node timeout bez prostoy*/
            /*const start = new Date()
            while (new Date(3000) - start < 3000) {
                console.log(new Date() - start < 3000)
            }*//* otschet vremeni no idet prostoi progi*/
            break
        }
        default: {
            response.write('404 not found')
            response.end()
        }
    }


})

server.listen(3003)