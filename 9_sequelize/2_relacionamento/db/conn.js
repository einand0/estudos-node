// const mysql = require('mysql')

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodemysql'
// })

// module.exports = pool


// CONECTANDO COM O SEQUELIZE 

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// try{

//     sequelize.authenticate()
//     console.log('Conectado com sucesso com o Sequelize!')

// } catch(err){
//     console.log('Não foi possível conectar: ', error)
// }

module.exports = sequelize