const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ["Item 1", "Item 2", "Item 3"]
    res.render('dashboard', { items })

})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        comments: 4
    }

    res.render('blodpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'Javascript',
            body: 'Este artigo vai te ajudar a aprender Node.js',
            comments: 4
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar a aprender PHP',
            comments: 4
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Este artigo vai te ajudar a aprender Python',
            comments: 4
        }
    ]

    res.render('blog', {posts})
})

app.get('/', (req, res) => {

    const user = {
        name: "Fernando",
        surname: "Lopes"
    }

    const auth = true

    const approved = true

    res.render('home', { user: user, auth, approved })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})