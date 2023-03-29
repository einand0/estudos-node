const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ["Item 1", "Item 2", "Item 3"]
    res.render('dashboard', {items})

})

app.get('/', (req, res) => {

    const user = {
        name: "Fernando",
        surname: "Lopes"
    }

    const auth = true

    const approved = true

    res.render('home', { user: user, auth, approved})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})