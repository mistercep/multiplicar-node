const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Tabla de Multiplicar: ${archivo}`))
            .catch(err => console.log(err));
        //console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(err => console.log(err));
        //console.log('crear');
        break;
    default:
        console.log('Comando no Existe');

}
//let base = 2;

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//let argv2 = process.argv;

//crearArchivo(base)
//.then(archivo => console.log(`Archivo Creado: ${archivo}`))
//.catch(err => console.log(err));