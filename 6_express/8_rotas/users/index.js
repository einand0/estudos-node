const express = require('express')
const path = require('path')
const basePath = path.join(__dirname, '../templates')
const router = express.Router()

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/usersform.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos!`)
    res.sendFile(`${basePath}/usersform.html`)
})

router.get('/:id', (req,res) => {

    const id = req.params.id

    // leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

module.exports = router