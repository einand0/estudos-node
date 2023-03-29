const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})



readline.question("Qual a sua linguagem de programação preferida? ", (language) => {

    if(language === "Javascript"){
        console.log("Ótima escolha!")
    } else{
        console.log("Isso nem é linguagem!")
    }
    readline.close()
})