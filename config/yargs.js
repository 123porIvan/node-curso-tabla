const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listado',
        type: 'boolean',
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'Hasta',
        type: 'number',
        describe: 'Muestra hasta que numero vamos a iterar'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;


    module.exports = argv;