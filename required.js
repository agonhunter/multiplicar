//Require
const fs = require('fs');
//const fs = require('express'); Pauqete que se intala no es nativo de node
//const fs = require('./fs'); archivos que nosotros creamos en el proyecto


let base = 7;
let data = '';
for(let i=1; i<=10; i++){

    data+= `${base} * ${i} = ${base*i}\n`;
}



fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

  if (err) throw err;

  console.log(`El archivo tabla-${base} ha sido creado!`);
});