const iniquirer = require('inquirer')
const chalk = require('chalk')

iniquirer.
    prompt([{
        name: 'p1',
        message: 'Qual o seu nome?',
    }, {
        name: 'p2',
        message: 'Qual a sua idade?'
    }]).then(
        (answers) => {
            if(!answers.p1 || answers.p2){
                throw new Error("O nome e a idade são obrigatórios!")
            }
            console.log(chalk.black.bgYellow(`O seu nome é ${answers.p1} e você tem ${answers.p2} anos!`));
        }
    ).catch(err => console.log(err))