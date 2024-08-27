// Funciones en JS

// function saludar(nombre) {
//    return `Hola, ${nombre}`;
// }


// const saludar = function(nombre) {
//    return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = (nombre) => `Hola, mundo`;


// console.log(saludar('Naruto'));

console.log(saludar2('Naruto'));
console.log(saludar3('Sasuke'));
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'Solid Snake'
});

const user = getUser();

console.log(user);


//Tarea

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    };
}

const usuarioActivo = getUsuarioActivo('Diego');
console.log(usuarioActivo);

// Transformar a funcion flecha
// Tiene que devolver un objeto implicito
// Probar

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Diego');

console.log(usuarioActivo2);