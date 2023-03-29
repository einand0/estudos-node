const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const basePath = path.join(__dirname, 'templates')
const aboutme = require('./about')

app.use(express.static('public'))

app.use('/about', aboutme)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`Projeto rodando na porta ${port}`)
})