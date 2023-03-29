const http = require('http')
const port = 8000

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-type', "text/html")
    res.end("<h1>Enviando HTML</h1>")
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})