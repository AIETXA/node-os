
const os = require('os');



function obtenerDatosSistema() {
    return {  
    Nombre: os.platform(),
    Tipo:os.type(),
    Version:os.release(),
    Arquitectura:os.arch(),
    Cpus: os.cpus().length,

    MemoriaTotalBytes: `${(os.totalmem()/(1024*1024)).toFixed(2)} MB`,
    MemoriaLibreBytes:  `${(os.freemem()/(1024*1024)).toFixed(2)} MB`
 };
}

module.exports = {obtenerDatosSistema};
  