//externo
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))


//interno
const meuModulo = require('./soma')
const soma = meuModulo.soma


const a = parseInt(args["a"])
const b = parseInt(args["b"])

soma(a,b)
