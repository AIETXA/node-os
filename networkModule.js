const os = require('os')
function obtenerDatosRed() {
    const interfaces = os.networkInterfaces();
    const resultado = {};

    for (const nombre in interfaces) {
        resultado[nombre] = interfaces[nombre].map(detalle => ({
           Familia: detalle.family,
           Direccion: detalle.address,
           Interno: detalle.internal 
        }));
    }
    return resultado;
}
module.exports = { obtenerDatosRed};
console.log(obtenerDatosRed());