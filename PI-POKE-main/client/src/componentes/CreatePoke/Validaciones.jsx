export default function validaciones(input) {
    let errores = {};
    
    if (!input.name) {
        errores.name = 'Se requiere un nombre';
    }

    if (input.vida > 255 || !input.vida) {
        errores.vida = 'Se requiere un numero menor a 255';
    }

    if (input.fuerza > 255 || !input.fuerza ) {
        errores.fuerza = 'Se requiere un numero menor a 255';
    }

    if (input.defensa > 255 || !input.defensa) {
        errores.defensa = 'Se requiere un numero menor a 255';
    }

    if (input.velocidad > 255 || !input.velocidad) {
        errores.velocidad = 'Se requiere un numero menor a 255';
    }

    if (!input.altura) {
        errores.altura = 'La altura es necesaria';
    };

    if (!input.peso) {
        errores.peso = 'El peso es necesario';
    }

    return errores;
};