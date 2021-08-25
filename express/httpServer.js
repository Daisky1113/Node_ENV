const dotenv = require('dotenv').config();
const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      const fileName = __dirname + '/' + process.env.STATIC_DIR_NAME + '/index.html'
      fs.readFile(fileName, { encoding: 'utf-8' }, (err, html) => {
        if (err) {
          res.statusCode = 500
          res.end('ERRRRRRR')
        } else {
          res.setHeader('Content-Type', 'text/html')
          res.end(html)
        }
      })
      break;
    case '/foo':
      res.end('fooooo')
      break
    default:
      res.statusCode = 404
      res.end('404 not found')
  }
}).listen(3000)