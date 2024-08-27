// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};


const { nombre, edad, clave } = persona;


// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

console.log(nombre);
console.log(edad);
console.log(clave);

// const retornaPersona = (usuario) => {
//    const {nombre, edad, clave} = usuario;
//    console.log(edad, clave, nombre)
// }

const useContext = ({ nombre, edad, rango = 'Capitán', clave }) => {
    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.4545,
            lng: 43.4343,
        }
    }
}

// const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);
const { nombreClave, anios, latlng } = useContext(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);

