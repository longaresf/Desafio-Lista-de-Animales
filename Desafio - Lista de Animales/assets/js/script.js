class Propietario{
    constructor(nombre,direccion,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}. El domicilio es ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}

class Animal extends Propietario{
    constructor(nombre,direccion,telefono,tipo){
        super(nombre,direccion,telefono);
        this._tipo = tipo;
    }

    get tipo(){
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal{
    constructor(nombre,direccion,telefono,tipo,nombreMascota,enfermedad){
        super(nombre,direccion,telefono,tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota(){
        return this._nombreMascota;
    }

    set nombreMascota(nuevo_nombreMascota){
        this._nombreMascota = nuevo_nombreMascota;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(nuevo_enfermedad){
        this._enfermedad = nuevo_enfermedad;
    }
}

//----------------------------------------------------

let formulario = document.querySelector('form');

let consulta = (event) => {
    event.preventDefault();

    let dueño = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.querySelector('ul');

    if( tipo == 'perro'){
        let perro = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad);
        resultado.innerHTML = `<li>${perro.datosPropietario()}</li>
                                <li>${perro.tipo}, mientras que el nombre de la mascota es: ${perro.nombreMascota} y la enfermedad es: ${perro.enfermedad}</li>`;
    } else if (tipo == 'gato'){
        let gato = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad);
        resultado.innerHTML = `<li>${gato.datosPropietario()}</li>
                                <li>${gato.tipo}, mientras que el nombre de la mascota es: ${gato.nombreMascota} y la enfermedad es: ${gato.enfermedad}</li>`;
    } else if (tipo == 'conejo'){
        let conejo = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad);
        resultado.innerHTML = `<li>${conejo.datosPropietario()}</li>
                                <li>${conejo.tipo}, mientras que el nombre de la mascota es: ${conejo.nombreMascota} y la enfermedad es: ${conejo.enfermedad}</li>`;
    }

    document.getElementById('propietario').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('nombreMascota').value = '';
    document.getElementById('tipo').value = 'perro';
    document.getElementById('enfermedad').value = '';
    
}

formulario.addEventListener('submit',consulta);