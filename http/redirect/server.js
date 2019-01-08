const fs = require('fs')
const http = require('http')

http.createServer((request, response) => {
    console.log(`url is ${request.url}`)

    // /
    // /new

    if (request.url === '/') {
        response.writeHead(301, {
            'Location': '/new'
        })
        response.end('')
    }

    if (request.url === '/new') {
        const html = fs.readFileSync('./index.html', 'utf8')
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    }
}).listen(3000)