const http = require('http')
const fs = require('fs')
const path = require('path')
const precocima = require('./precocima.json')
const precobaixo = require('./precobaixo.json')

http.createServer((req,res) => {

    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*'
    })

    if(req.url == "/baixo") {
      return res.end(JSON.stringify(precobaixo))
    } else if(req.url == "/cima") {
      return res.end(JSON.stringify(precocima))
    } else {
      res.end(JSON.stringify({message: "ok"}))
    }

    
        

}).listen(3300, () => {console.log("Api está rodando")})