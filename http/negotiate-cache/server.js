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
        const etag = request.headers['if-none-match']
        if (etag === '222') {
            response.writeHead(304, {
                'Content-Type': 'application/json',
                'Cache-Control': 'max-age=300000000, no-cache',
                'Last-Modifield': '111',
                'Etag': '222'
            })
            response.end('')
        } else {
            response.writeHead(200, {
                'Content-Type': 'application/json',
                'Cache-Control': 'max-age=300000000, no-cache',
                'Last-Modefied': '111',
                'Etag': '222'
            })
            response.end(JSON.stringify({
                name: 'LongQian',
                age: 24
            }))
        }
        
    }
}).listen(3000)