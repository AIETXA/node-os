const { obtenerDatosSistema } = require('./osModule');
const { obtenerDatosRed } = require('./networkModule');

const sistema = obtenerDatosSistema();
console.log('Info del sistema');

for (const [clave, valor] of Object.entries(sistema)) {
    console.log(`${clave}: ${valor}`);
}


const redes = obtenerDatosRed();
console.log('Interfaces de Red');
for (const interfaz in redes) {
    console.log(`Interfaz ${interfaz}:`);
    redes[interfaz].forEach(detalle => {
        console.log(`Familia: ${detalle.Familia}`);
        console.log(`Dirección: ${detalle.Dirección}`);
        console.log(`Interno: ${detalle.Interno}`);
    });
    console.log("");
}