/**
 * @class Person
 * Contiene los datos del formulario para registrar una persona
 */

export class usuarioEvento {

    constructor(
        public dni: string,
        public nombre: string,
        public apellidos: string,
        public direccion: string,
        public clubRunning: string,
        public talla: string,
        public metodoPago: string,
    )   {  }

}