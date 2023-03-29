const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {

    res.send('Olá Mundo!')

})

app.get('/about', (req, res) =>{
    res.send('Sobre mim!')
})

app.listen(port, () =>{
    console.log("Servidor rodando na porta ", port)
})