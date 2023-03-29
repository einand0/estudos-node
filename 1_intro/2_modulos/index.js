const fs = require('fs') // requisitando o file system

fs.readFile('arquivo.txt', 'utf8', (err,data) => {
    if(err){
        console.e.log(err)
    } 

    console.log(data)
})