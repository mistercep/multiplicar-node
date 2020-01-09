const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${i * base}`.green);
            //console.log(`${base} * i = ${data}`);
        }
    });

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
            console.log(`El archivo tabla-${base}.txt ha sido creado`.green);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}