//Operador Ternario

const activo = true;

let mensaje = '';

if (activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}

// const mensaje2 = (activo) ? 'Activo' : 'Inactivo';

// const mensaje2 = (activo) ? 'Activo' : null;
const mensaje2 = !activo && 'Activo';


console.log(mensaje);
console.log(mensaje2);
