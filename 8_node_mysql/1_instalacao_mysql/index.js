const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
// const port = 3000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'nodemysql'
})

conn.connect(function(err) {
    if(err){
        console.log(err)
    }

    console.log('Conectado ao MYSQL')

    app.listen(4000)
})

// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`)
// })