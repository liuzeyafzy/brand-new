const fs = require('fs')
const http = require('http')

http.createServer((request, response) => {
    console.log(`url is ${request.url}`)

    if (request.url === '/') {
        const html = fs.readFileSync('./index.html', 'utf8')
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    }

    if (request.url === '/get_person') {
        // const expires = new Date('2019-01-07 19:20:30')
        response.writeHead(200, {
            'Content-Type': 'application/json',
            'Cache-Control': 'max-age=30, no-store'
            // 'Expires': expires.toUTCString()
        })
        response.end(JSON.stringify({
            name: 'LongQian',
            age: 24
        }))
    }
}).listen(3000)