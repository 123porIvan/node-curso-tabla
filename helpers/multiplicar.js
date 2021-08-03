const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10 ) => {

    try{

            if ( listar ) {
                
                console.log('=================='.green);
                console.log(' TABLA DEL:'.green, colors.bold (base));
                console.log('=================='.green);
            
            }
            let salida = '';
            let consola = ' ';
            let multiplicador = hasta;
        
            for (let i = 1; i <= multiplicador; i++) {
                salida += `${base} x ${ i } = ${base * i} \n`;
                consola +=  `${base} ${'x'.green} ${ i } ${'='.green} ${base * i}\n`;
            }
        
            if ( listar ) {

                console.log(consola);

            }
        
            fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        
            return `tabla-${ base }.txt, `


    }catch (err){
        throw err;
    }


}

module.exports = {
    crearArchivo

}