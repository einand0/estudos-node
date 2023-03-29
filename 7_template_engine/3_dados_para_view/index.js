const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: "Fernando",
        surname: "Lopes"
    }

    res.render('home', { user: user})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})