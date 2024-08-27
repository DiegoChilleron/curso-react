
const persona = {
    nombre: 'Diego',
    apellido: 'Chilleron',
    edad: 45,
    direccion: {
        ciudad: 'Elche',
        zip: 32305,
        calle: 'Av. de la libertad',
        numero: 11,
    }
}

// console.table(persona);
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);

